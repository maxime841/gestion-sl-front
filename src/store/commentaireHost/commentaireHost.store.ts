import { BehaviorSubject } from 'rxjs'
import { ICommentaire } from '@types-app/models/commentaire.model'

export const CommentaireHostStore = {

  /**
   * list of commenataire host via api
   * @type array de type Ihost[]
   */
  commentairesHost$: new BehaviorSubject<ICommentaire[]>([]),

  /**
   * commentaire host select
   * @type IComment host
   */
  commentaireHostSelected$: new BehaviorSubject<ICommentaire>({}),

  /**
   * send commentaire host select
   * @type IComment host
   */
  sendCommentaireHostSelected$: new BehaviorSubject<ICommentaire>({}),
}
