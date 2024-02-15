import { ICommentaire, ISendCommentaireHostResponse } from '@types-app/models/commentaire.model'
import { useEffect, useState } from 'react'
import { CommentaireHostService } from './commentaireHost.service'
import { CommentaireHostStore } from './commentaireHost.store'

export const CommentaireHostHook = {

  /**
   * hook for observable commentaires host$
   */
  useCommentairesHost: () => {
    const [commentairesHost, setCommentairesHost] = useState<ICommentaire[]>([])

    useEffect(() => {
      async function getCommentairesHost() {
        await CommentaireHostService.getAllCommentairesHost()
      }
      CommentaireHostStore.commentairesHost$.subscribe(value => setCommentairesHost(value))

      getCommentairesHost()
    }, [])

    return commentairesHost
  },

  /**
   * hook for observable commentaireHostSelected$
   * @param id: string
   */
  useCommentaireHost: (id: any) => {
    const [commentaireHost, setCommentaireHost] = useState<ICommentaire>({})

    useEffect(() => {
      // execute call
      async function getCommentaireHost() {
        await CommentaireHostService.getCommentaireHost(id)
      }

      // afect observable
      CommentaireHostStore.commentaireHostSelected$.subscribe(value => setCommentaireHost(value))

      getCommentaireHost()
    }, [id])

    // return variable hook
    return commentaireHost
  },

  /**
   * hook for observable send one commentaire host$
   * @param commentaire: object commentaire
   */
   sendCommentaireHost: (title: any, content: any, id: any) => {
    const [sendCommentaireHost, setSendCommentaireHost] = useState<ISendCommentaireHostResponse>({})

    useEffect(() => {
      async function commentaireHostSend() {
        await CommentaireHostService.commentaireHost(title, content, id)
      }
       CommentaireHostStore.sendCommentaireHostSelected$.subscribe(value => setSendCommentaireHost(value))
      commentaireHostSend()
    }, [title, content, id])

    return sendCommentaireHost
  },
}
