import { http } from '@config-app/http/http.instance'
import { IDeleteArticleResponse, IAddArticleResponse, IArticleResponse, IUpdateArticleResponse, IArticle } from '@types-app/models/article.model'
import { ArticleStore } from './article.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const ArticleService = {
  /**
   * get all Articles
   */
  getAllArticles: async () => {
    const res = await http.get<IArticle>('/articles') // ici on a response
    ArticleStore.articles$.next([...res.data.articles!])
  },

  /**
   * get one article via id
   * @param id string
   */
  getArticle: async (id: string) => {
    const res = await http.get<IArticleResponse>(`article/${id}`)
    ArticleStore.articleSelected$.next({ ...res.data.article })
  },

  /**
   * ajouter une article
   * @param name string
   * @param owner string
   * @param presentation string
   * @param description string
   * @param price string
   * @param tag string
   */
  addOneArticle: async (name: string, owner: string, presentation: string, description: string, price: string, tag: string) => {
    // add article
  const res = await http.post<IAddArticleResponse>(`${Eroute.ADD_ARTICLE}`, {
    name,
    owner,
    presentation,
    description,
    price,
    tag
  })
  ArticleStore.addArticle$.next({ ...res.data.addArticle })
},

/**
 * update article via FormData
 * @param article Iarticle
 */
updateArticle: async (name: string, owner: string, presentation: string, description: string, price: string, tag: string, id: any) => {
  try {
    const res = await http.put<IUpdateArticleResponse>(
      `${Eroute.UPDATE_ARTICLE}${id}`, {
      name,
      owner,
      presentation,
      description,
      price,
      tag
      })
    ArticleStore.updateArticle$.next({ ...res.data.updateArticle! })
  } catch (error) {
    AppService.errorMessage(
      userStore.updateProfilError$,
      error,
      Eerror.FORGOT_PASSWORD,
    )
    userStore.resetPasswordLoading$.next(false)
    return false
  }
},

/**
 * delete article via FormData
 * @param article Iarticle
 */
deleteArticle: async (id: string) => {
  try {
    const res = await http.delete<IDeleteArticleResponse>(
      `${Eroute.DELETE_ARTICLE}${id}`,)

    ArticleStore.deleteArticle$.next({ ...res.data.deleteArticle! })
  } catch (error) {
    AppService.errorMessage(
      userStore.updateProfilError$,
      error,
      Eerror.FORGOT_PASSWORD,
    )
    userStore.resetPasswordLoading$.next(false)
    return false
  }
},

}
