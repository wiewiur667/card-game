import type { CardSuite } from '../card-suite'

export interface ICard {
  id?: string
  suite: CardSuite
  value: string
}
