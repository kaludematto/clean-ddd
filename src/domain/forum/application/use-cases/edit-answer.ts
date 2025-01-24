import { Answer } from '../../enterprise/entities/answer'
import { AnswerRepository } from '../repositories/answers-repository'

interface EditAnswerUseCaseRequest {
  authorId: string
  AnswerId: string
  content: string
}

interface EditAnswerUseCaseResponse {
  answer: Answer
}

export class EditAnswerUseCase {
  constructor(private AnswersRepository: AnswerRepository) {}

  async execute({
    authorId,
    AnswerId,
    content,
  }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.AnswersRepository.findById(AnswerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('not Allowed')
    }

    answer.content = content

    await this.AnswersRepository.save(answer)

    return {
      answer,
    }
  }
}
