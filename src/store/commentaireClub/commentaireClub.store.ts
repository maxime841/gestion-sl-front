import { BehaviorSubject } from 'rxjs'
import { IClub } from '@types-app/models/club.model'
import { ICommentaire } from '@types-app/models/commentaire.model'

export const CommentaireClubStore = {

  /**
   * list of commenatire club via api
   * @type array de type IClub[]
   */
  commentairesClub$: new BehaviorSubject<ICommentaire[]>([]),

  /**
   * commentaire club select
   * @type IComment club
   */
  commentaireClubSelected$: new BehaviorSubject<ICommentaire>({}),

  /**
   * send commentaire club select
   * @type IComment club
   */
  sendCommentaireClubSelected$: new BehaviorSubject<ICommentaire>({}),
}
