import { http } from '@config-app/http/http.instance'
import { ICommentairesClubResponse, ICommentaireClubResponse, ISendCommentaireClubResponse } from '@types-app/models/commentaire.model'
import { CommentaireClubStore } from './commentaireClub.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const CommentaireClubService = {
  /**
   * get all comments clubs
   */
  getAllCommentairesClub: async () => {
    const res = await http.get<ICommentairesClubResponse>('/commentaire') // ici on a response
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
   * post one commentaire club
   *
   */
   commentaireClub: async (commentaire: string) => {
    try {
      const res = await http.post<ISendCommentaireClubResponse>(
        Eroute.SEND_COMMENTAIRE_CLUB, {
         commentaire,

        })
        if (res.data.commentaire) {
          return commentaire
        }
      } catch (error) {
          AppService.errorMessage(userStore.loginError$, error, Eerror.LOGIN)
          userStore.loginLoading$.next(false)
        }
    }
}
