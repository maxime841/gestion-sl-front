 import { IDancer } from '@types-app/models/dancer.model'
 import { IDj } from '@types-app/models/dj.model'
 import { IParty } from '@types-app/models/party.model'
import { IPicture } from './picture.type'

/**
 * type for all clubs
 */
export interface IClub {
  id?: number
  name?: string
  owner?: string
  created_at?: Date
  updated_at?: Date
  presentation?: string
  picture?: IPicture
  pictures?: IPicture[]
  parties?: IParty[]
  djs?: IDj[]
  dancers?: IDancer[]
}

/**
 * type for response one club
 */
export interface IClubResponse {
  club: IClub
}

/**
 * type for response all clubs
 */
export interface IClubsResponse {
  clubs: IClub[]
  parties: IClub[]
}

/**
 * type for get profil page club
 */
export type TPageProfilClub = {
  clubCurrent: IClub
}
