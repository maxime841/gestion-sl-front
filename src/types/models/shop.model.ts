import { IArticle } from './article.model'
import { IPicture } from './picture.type'

/**
* type for all shops
*/
export interface IShop {
 id?: number
 name?: string
 owner?: string
 created_at?: Date
 updated_at?: Date
 presentation?: string
 picture?: IPicture
 pictures?: IPicture[]
 articles?: IArticle[]
}

/**
* type for response one club
*/
export interface IShopResponse {
 shop: IShop
}

/**
* type for response all shops
*/
export interface IShopsResponse {
 shops: IShop[]
}

/**
* type for get profil page club
*/
export type TPageProfilShop = {
 shopCurrent: IShop
}
