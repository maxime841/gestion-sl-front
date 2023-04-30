import { ICommentaire, ISendCommentaireClubResponse } from '@types-app/models/commentaire.model'
import { useEffect, useState } from 'react'
import { CommentaireClubService } from './commentaireClub.service'
import { CommentaireClubStore } from './commentaireClub.store'

export const CommentaireClubHook = {
  /**
   * hook for observable commentaires club$
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
   * @param commentaire: object commentaire
   */
   sendCommentaireClub: (commentaire: any) => {
    const [sendCommentaireClub, setSendCommentaireClub] = useState<ISendCommentaireClubResponse>({})

    useEffect(() => {
      async function commentaireClubSend() {
        await CommentaireClubService.commentaireClub(commentaire)
      }
       CommentaireClubStore.sendCommentaireClubSelected$.subscribe(value => setSendCommentaireClub(value))
      commentaireClubSend()
    }, [commentaire])

    return sendCommentaireClub
  },
}
