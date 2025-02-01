import { Either, left, right } from './either'

function doSomething(shouldSuccess: boolean): Either<string, string> {
  if (shouldSuccess) {
    return right('success')
  } else {
    return left('error')
  }
}

test('success result', () => {
  const successResult = doSomething(true)

  expect(successResult.value).toEqual('success')
})

test('error result', () => {
  const error = left('error')

  expect(error.value).toEqual('error')
})
