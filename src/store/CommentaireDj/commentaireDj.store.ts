import { BehaviorSubject } from 'rxjs'
import { ICommentaire } from '@types-app/models/commentaire.model'

export const CommentaireDjStore = {

  /**
   * list of commenatire dj via api
   * @type array de type IDj[]
   */
  commentairesDj$: new BehaviorSubject<ICommentaire[]>([]),

  /**
   * commentaire dj select
   * @type IComment dj
   */
  commentaireDjSelected$: new BehaviorSubject<ICommentaire>({}),

  /**
   * send commentaire club select
   * @type IComment dj
   */
  sendCommentaireDjSelected$: new BehaviorSubject<ICommentaire>({}),
}
