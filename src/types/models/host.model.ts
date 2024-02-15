import { ICommentaire } from './commentaire.model'
import { IPicture } from './picture.type'

/**
 * type for all hosts
 */
export interface IHost {
    id?: number
    name?: string
    created_at?: Date
    updated_at?: Date
    presentation?: string
    picture?: IPicture
    pictures?: IPicture[]
    commentaires?: ICommentaire[]
    date_entrance?: Date
  }

  /**
 * type for response one host
 */
export interface IHostResponse {
  updateHost: IHost
  host: IHost
}

/**
 * type for response all hosts
 */
export interface IHostsResponse {
  hosts: IHost[]
}

/**
 * type for get profil page host
 */
export type TPageProfilHost = {
  hostCurrent: IHost
}

export interface IAddHostResponse {
  addHost?: IHost
}

 export interface IUpdateHostResponse {
  updateHost?: IHost
}

 export interface IDeleteHostResponse {
  deleteHost?: IHost
}
