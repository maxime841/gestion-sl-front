import { IDancer } from '@types-app/models/dancer.model'
import { useEffect, useState } from 'react'
import { DancerService } from './dancer.service'
import { DancerStore } from './dancer.store'

export const DancerHook = {
  /**
   * hook for observable dancers$
   */
  useDancers: () => {
    const [dancers, setDancers] = useState<IDancer[]>([])

    useEffect(() => {
      async function getDancers() {
        await DancerService.getAllDancers()
      }
      DancerStore.dancers$.subscribe(value => setDancers(value))

      getDancers()
    }, [])

    return dancers
  },

  /**
   * hook for observable dancerSelected$
   * @param id: string
   */
  useDancer: (id: string) => {
    const [dancer, setDancer] = useState<IDancer>({})

    useEffect(() => {
      // execute call
      async function getDancer() {
        await DancerService.getDancer(id)
      }

      // afect observable
      DancerStore.dancerSelected$.subscribe(value => setDancer(value))

      getDancer()
    }, [id])

    // return variable hook
    return dancer
  },
}
