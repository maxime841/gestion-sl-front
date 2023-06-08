import { IPicture } from './picture.type'

/**
 * type for all lands
 */
export interface ILand {
  id?: number
  name?: string
  nameLand?: string
  owner?: string
  ownerLand?: string
  presentation?: string
  presentationLand?: string
  description?: string
  descriptionLand?: string
  group?: string
  groupLand?: string
  prims?: number
  primsLand?: string
  remaining_prims?: number
  remaining_primsLand?: string
  date_buy?: Date
  date_buyLand?: string
  picture?: IPicture
  length?: number
}

/**
 * type for response one land
 */
export interface ILandResponse {
  land?: ILand
}

/**
 * type for response all lands
 */
export interface ILandsResponse {
  lands?: ILand[]
}

export interface IAddLandResponse {
  addLand?: ILand
}

export interface IAddPictureLandResponse {
  addLandPicture?: IPicture
}

export interface IUpdateLandResponse {
  updateLand?: ILand
}

export interface IDeleteLandResponse {
  deleteLand?: ILand
}

/**
 * type for get profil page dancer
 */
export type TPageProfilLand = {
  landCurrent: ILand
}
