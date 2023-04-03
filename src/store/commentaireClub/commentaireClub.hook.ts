import { ICommentaire } from '@types-app/models/commentaire.model'
import { useEffect, useState } from 'react'
import { CommentaireClubService } from './commentaireClub.service'
import { CommentaireClubStore } from './commentaireClub.store'

export const CommentaireClubHook = {
  /**
   * hook for observable commentaire clubs$
   */
  useCommentairesClub: () => {
    const [commentairesClub, setCommentairesClub] = useState<ICommentaire[]>([])

    useEffect(() => {
      async function getCommentairesClub() {
        await CommentaireClubService.getAllCommentairesClub()
      }
      CommentaireClubStore.commentairesClub$.subscribe(value => setCommentairesClub(value))

      getCommentairesClub()
    }, [])
    console.log('commentaire dans hook', commentairesClub)

    return commentairesClub
  },

  /**
   * hook for observable commentaireclubSelected$
   * @param id: string
   */
  useCommentaireClub: (id: string) => {
    const [commentaireClub, setCommentaireClub] = useState<ICommentaire>({})

    useEffect(() => {
      // execute call
      async function getCommentaireClub() {
        await CommentaireClubService.getCommentaireClub(id)
      }

      // afect observable
      CommentaireClubStore.commentaireClubSelected$.subscribe(value => setCommentaireClub(value))

      getCommentaireClub()
    }, [id])

    // return variable hook
    return commentaireClub
  },

  /**
   * hook for observable send one commentaire club$
   */
  sendCommentaireClub: () => {
    const [commentaireClub, setCommentaireClub] = useState<ICommentaire>({})

    useEffect(() => {
      async function sendCommentaireClub() {
        await CommentaireClubService.sendCommentaireClub()
      }
      CommentaireClubStore.sendCommentaireClubSelected$.subscribe(value => setCommentaireClub(value))

      sendCommentaireClub()
    }, [])

    return commentaireClub
  },
}
