import { IPicture } from './picture.type'

/**
 * type for all clubs
 */
export interface IParty {
    id?: number
    name?: string
    owner?: string
    created_at?: Date
    updated_at?: Date
    presentation?: string
    picture?: IPicture
    pictures?: IPicture[]
  }

  export type TPartyProfil = {
    partyCurrent: IParty
  }
