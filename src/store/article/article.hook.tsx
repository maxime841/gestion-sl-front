import { IArticle } from '@types-app/models/article.model'
import { useEffect, useState } from 'react'
import { ArticleService } from './article.service'
import { ArticleStore } from './article.store'

export const ArticleHook = {
  /**
   * hook for observable Articles$
   */
  useArticles: () => {
    const [articles, setArticles] = useState<IArticle[]>([])

    useEffect(() => {
      async function getArticles() {
        await ArticleService.getAllArticles()
      }
      ArticleStore.articles$.subscribe(value => setArticles(value))

      getArticles()
    }, [])

    return articles
  },

  /**
   * hook for observable ArticlesSelected$
   * @param id: string
   */
  useArticle: (id: string) => {
    const [article, setArticle] = useState<IArticle>({})

    useEffect(() => {
      // execute call
      async function getArticle() {
        await ArticleService.getArticle(id)
      }

      // afect observable
      ArticleStore.articleSelected$.subscribe(value => setArticle(value))

      getArticle()
    }, [id])

    // return variable hook
    return article
  },
}
