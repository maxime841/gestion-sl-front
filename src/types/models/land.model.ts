import { IHouse } from './house.model'
import { IPicture } from './picture.type'

/**
 * type for all lands
 */
export interface ILand {
  id?: number
  name?: string
  owner?: string
  presentation?: string
  description?: string
  group?: string
  prims?: number
  remaining_prims?: number
  date_buy?: Date
  houses?: [IHouse]
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
