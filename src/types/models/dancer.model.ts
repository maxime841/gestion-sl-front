import { IPicture } from './picture.type'

/**
 * type for all dancers
 */
export interface IDancer {
    id?: number
    name?: string
    created_at?: Date
    updated_at?: Date
    presentation?: string
    picture?: IPicture
    pictures?: IPicture[]
    date_entrance?: Date
  }

  /**
 * type for response one dancer
 */
export interface IDancerResponse {
  updateDancer: IDancer
  dancer: IDancer
}

/**
 * type for response all dancers
 */
export interface IDancersResponse {
  dancers: IDancer[]
}

/**
 * type for get profil page dancer
 */
export type TPageProfilDancer = {
  dancerCurrent: IDancer
}

export interface IAddDancerResponse {
  addDancer?: IDancer
}

 export interface IUpdateDancerResponse {
  updateDancer?: IDancer
}

 export interface IDeleteDancerResponse {
  deleteDancer?: IDancer
}
