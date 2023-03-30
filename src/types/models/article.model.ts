import { IPicture } from './picture.type'

/**
 * type for all articles
 */
export interface IArticle {
    id?: number
    name?: string
    owner?: string
    created_at?: Date
    updated_at?: Date
    presentation?: string
    picture?: IPicture
    pictures?: IPicture[]
    price?: number
    tag?: string
  }

  export type TArticleProfil = {
    articleCurrent: IArticle
  }
