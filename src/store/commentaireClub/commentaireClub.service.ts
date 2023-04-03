import { http } from '@config-app/http/http.instance'
import { ICommentairesClubResponse, ICommentaireClubResponse, ISendCommentaireClubResponse } from '@types-app/models/commentaire.model'
import { CommentaireClubStore } from './commentaireClub.store'

export const CommentaireClubService = {
  /**
   * get all comments clubs
   */
  getAllCommentairesClub: async () => {
    const res = await http.get<ICommentairesClubResponse>('/commentaire') // ici on a response
    console.log('ma res', res.data)
    CommentaireClubStore.commentairesClub$.next([...res.data.commentaires!])
  },

  /**
   * get one commentaire club via id
   * @param id string
   */
  getCommentaireClub: async (id: string) => {
    const res = await http.get<ICommentaireClubResponse>(`/commentaire/${id}`)
    CommentaireClubStore.commentaireClubSelected$.next({ ...res.data.comment })
  },

   /**
   * get one commentaire club via id
   * @param id string
   */
   sendCommentaireClub: async () => {
    const res = await http.get<ISendCommentaireClubResponse>('/commentaire/create')
    CommentaireClubStore.commentaireClubSelected$.next({ ...res.data.commentaire })
  },

}
