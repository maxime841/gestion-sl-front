import { http } from '@config-app/http/http.instance'
import { ICommentairesHostResponse, ICommentaireHostResponse, ISendCommentaireHostResponse } from '@types-app/models/commentaire.model'
import { CommentaireHostStore } from './commentaireHost.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const CommentaireHostService = {
  /**
   * get all comments hosts
   */
  getAllCommentairesHost: async () => {
    const res = await http.get<ICommentairesHostResponse>('/commentaireHost') // ici on a response
    CommentaireHostStore.commentairesHost$.next([...res.data.commentaires!])
  },

  /**
   * get one commentaire host via id
   * @param id string
   */
  getCommentaireHost: async (id: string) => {
    const res = await http.get<ICommentaireHostResponse>(`/commentaireHost${id}`)
    CommentaireHostStore.commentaireHostSelected$.next({ ...res.data.comment })
  },

   /**
   * post one commentaire host
   *
   */
   commentaireHost: async (title: string, content: string, id:any) => {
    try {
      const res = await http.post<ISendCommentaireHostResponse>(
        `${Eroute.SEND_COMMENTAIRE_HOST}`, {
          title,
         content,
         id
        })
        if (res.data.content) {
          return [title, content, id]
        }
      } catch (error) {
          AppService.errorMessage(userStore.loginError$, error, Eerror.LOGIN)
          userStore.loginLoading$.next(false)
        }
    }
}
