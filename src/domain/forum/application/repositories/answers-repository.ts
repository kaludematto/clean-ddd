import { Answer } from '../../enterprise/entities/answer'

export interface AnswerRepository {
  findById(id: Answer): Promise<Answer | null>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}
