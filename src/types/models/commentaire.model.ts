/**
* type for all commentaire
*/
export interface ICommentaire {
 id?: number
 avatar?: string
 author?: string
 title?: string
 commentaire?: string
 date_comment?: string
 created_at?: Date
 updated_at?: Date
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
    commentaire: ICommentaire
   }
