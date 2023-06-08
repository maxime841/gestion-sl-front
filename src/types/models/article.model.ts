import { IPicture } from './picture.type'

/**
* type for all Articles
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
 articles?: IArticle[]
}

/**
* type for response one Article
*/
export interface IArticleResponse {
 updateArticle: IArticle
 article: IArticle
}

/**
* type for response all Articles
*/
export interface IArticlesResponse {
 articles?: IArticle[]
}

export interface IAddArticleResponse {
 addArticle?: IArticle
}

export interface IUpdateArticleResponse {
 updateArticle?: IArticle
}

export interface IDeleteArticleResponse {
 deleteArticle?: IArticle
}

/**
* type for get profil page Article
*/
export type TArticleProfil = {
    articleCurrent: IArticle
   }
