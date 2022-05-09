import { ICard } from './card.interface'

export interface IPlayer {
  id: string
  name: string
  isReady: boolean
  isHost: boolean
  isSpectator: boolean
  isConnected: boolean
  cards: Array<ICard>
}
