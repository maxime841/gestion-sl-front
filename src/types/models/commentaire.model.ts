import { IPicture } from './picture.type'
import { Iuser } from './user.model'

/**
* type for all commentaire
*/
export interface ICommentaire {
 id?: number
 author?: string
 title?: string
 content?: string
 date_comment?: string
 created_at?: Date
 updated_at?: Date
 picture?: IPicture
 user_id?: number
 user?: Iuser
}

/**
* type for response one commentaire club
*/
export interface ICommentaireClubResponse {
 comment: ICommentaire
}

/**
* type for response all commentaires club
*/
export interface ICommentairesClubResponse {
 commentaires: ICommentaire[]
}

/**
* type for response send one commentaire club
*/
export interface ISendCommentaireClubResponse {
    title?: string
    content?: string
    user?: Iuser
}

/**
* type for response one commentaire dj
*/
export interface ICommentaireDjResponse {
    comment: ICommentaire
   }

   /**
   * type for response all commentaires dj
   */
   export interface ICommentairesDjResponse {
    commentaires: ICommentaire[]
   }

   /**
   * type for response send one commentaire dj
   */
   export interface ISendCommentaireDjResponse {
       title?: string
       content?: string
       user?: Iuser
   }

   /**
* type for response one commentaire host
*/
export interface ICommentaireHostResponse {
    comment: ICommentaire
   }

   /**
   * type for response all commentaires host
   */
   export interface ICommentairesHostResponse {
    commentaires: ICommentaire[]
   }

   /**
   * type for response send one commentaire host
   */
   export interface ISendCommentaireHostResponse {
       title?: string
       content?: string
       user?: Iuser
   }
