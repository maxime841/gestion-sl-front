import { BehaviorSubject } from 'rxjs'
import { IArticle } from '@types-app/models/article.model'

export const ArticleStore = {
  /**
   * list of Article via api
   * @type array de type IArticle[]
   */
  articles$: new BehaviorSubject<IArticle[]>([]),

  /**
   * Article select
   * @type IArticle
   */
  articleSelected$: new BehaviorSubject<IArticle>({}),

  /**
   * add one Article
   * @type IArticle
   */
  addArticle$: new BehaviorSubject<IArticle>({}),

  /**
   * update one Article
   * @type IArticle
   */
  updateArticle$: new BehaviorSubject<IArticle>({}),

  /**
   * delete one Article
   * @type IArticle
   */
  deleteArticle$: new BehaviorSubject<IArticle>({}),
}
