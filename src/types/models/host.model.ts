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
    date_entrance?: Date
  }

  /**
 * type for response one host
 */
export interface IHostResponse {
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
