import { ICommentaire } from './commentaire.model'
import { IPicture } from './picture.type'

/**
 * type for all clubs
 */
export interface IDj {
    id?: number
    name?: string
    style?: string
    created_at?: Date
    updated_at?: Date
    presentation?: string
    picture?: IPicture
    pictures?: IPicture[]
    commentaires?: ICommentaire[]
    date_entrance?: Date
  }

  /**
 * type for response one dj
 */
export interface IDjResponse {
  updateDj: any
  dj: IDj
}

/**
 * type for response all clubs
 */
export interface IDjsResponse {
  djs: IDj[]
}

/**
 * type for get profil page dj
 */
export type TPageProfilDj = {
  djCurrent: IDj
}

export interface IAddDjResponse {
  addDj?: IDj
}

 export interface IUpdateDjResponse {
  updateDj?: IDj
}

 export interface IDeleteDjResponse {
  deleteDj?: IDj
}
