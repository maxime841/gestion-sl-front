import { http } from '@config-app/http/http.instance'
import { ICommentairesDjResponse, ICommentaireDjResponse, ISendCommentaireDjResponse } from '@types-app/models/commentaire.model'
import { CommentaireDjStore } from './commentaireDj.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const CommentaireDjService = {
  /**
   * get all comments djs
   */
  getAllCommentairesDjs: async () => {
    const res = await http.get<ICommentairesDjResponse>('/commentaireDj') // ici on a response
    CommentaireDjStore.commentairesDj$.next([...res.data.commentaires!])
  },

  /**
   * get one commentaire dj via id
   * @param id string
   */
  getCommentaireDj: async (id: string) => {
    const res = await http.get<ICommentaireDjResponse>(`/commentaireDj${id}`)
    CommentaireDjStore.commentaireDjSelected$.next({ ...res.data.comment })
  },

   /**
   * post one commentaire dj
   *
   */
   commentaireDj: async (title: string, content: string, id:any) => {
    try {
      const res = await http.post<ISendCommentaireDjResponse>(
        `${Eroute.SEND_COMMENTAIRE_DJ}`, {
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
