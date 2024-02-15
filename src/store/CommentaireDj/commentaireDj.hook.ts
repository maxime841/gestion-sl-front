import { ICommentaire, ISendCommentaireDjResponse } from '@types-app/models/commentaire.model'
import { useEffect, useState } from 'react'
import { CommentaireDjService } from './commentaireDj.service'
import { CommentaireDjStore } from './commentaireDj.store'

export const CommentaireDjHook = {

  /**
   * hook for observable commentaires club$
   */
  useCommentairesDjs: () => {
    const [commentairesDj, setCommentairesDj] = useState<ICommentaire[]>([])

    useEffect(() => {
      async function getCommentairesDj() {
        await CommentaireDjService.getAllCommentairesDjs()
      }
      CommentaireDjStore.commentairesDj$.subscribe(value => setCommentairesDj(value))

      getCommentairesDj()
    }, [])

    return commentairesDj
  },

  /**
   * hook for observable commentaireclubSelected$
   * @param id: string
   */
  useCommentaireDj: (id: any) => {
    const [commentaireDj, setCommentaireDj] = useState<ICommentaire>({})

    useEffect(() => {
      // execute call
      async function getCommentaireDj() {
        await CommentaireDjService.getCommentaireDj(id)
      }

      // afect observable
      CommentaireDjStore.commentaireDjSelected$.subscribe(value => setCommentaireDj(value))

      getCommentaireDj()
    }, [id])

    // return variable hook
    return commentaireDj
  },

  /**
   * hook for observable send one commentaire club$
   * @param commentaire: object commentaire
   */
   sendCommentaireDj: (title: any, content: any, id: any) => {
    const [sendCommentaireDj, setSendCommentaireDj] = useState<ISendCommentaireDjResponse>({})

    useEffect(() => {
      async function commentaireDjSend() {
        await CommentaireDjService.commentaireDj(title, content, id)
      }
       CommentaireDjStore.sendCommentaireDjSelected$.subscribe(value => setSendCommentaireDj(value))
      commentaireDjSend()
    }, [title, content, id])

    return sendCommentaireDj
  },
}
