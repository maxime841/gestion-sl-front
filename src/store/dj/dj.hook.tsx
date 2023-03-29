import { IDj } from '@types-app/models/dj.model'
import { useEffect, useState } from 'react'
import { DjService } from './dj.service'
import { DjStore } from './dj.store'

export const DjHook = {
  /**
   * hook for observable djs$
   */
  useDjs: () => {
    const [djs, setDjs] = useState<IDj[]>([])

    useEffect(() => {
      async function getDjs() {
        await DjService.getAllDjs()
      }
      DjStore.djs$.subscribe(value => setDjs(value))

      getDjs()
    }, [])

    return djs
  },

  /**
   * hook for observable djSelected$
   * @param id: string
   */
  useDj: (id: string) => {
    const [dj, setDj] = useState<IDj>({})

    useEffect(() => {
      // execute call
      async function getDj() {
        await DjService.getDj(id)
      }

      // afect observable
      DjStore.djSelected$.subscribe(value => setDj(value))

      getDj()
    }, [id])

    // return variable hook
    return dj
  },
}
