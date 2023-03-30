import { IHobby } from '@types-app/models/hobby.model'
import { useEffect, useState } from 'react'
import { HobbyService } from './hobby.service'
import { HobbyStore } from './hobby.store'

export const HobbyHook = {
  /**
   * hook for observable hobbies$
   */
  useHobbies: () => {
    const [hobbies, setHobbies] = useState<IHobby[]>([])

    useEffect(() => {
      async function getHobbies() {
        await HobbyService.getAllHobbies()
      }
      HobbyStore.hobbies$.subscribe(value => setHobbies(value))

      getHobbies()
    }, [])

    return hobbies
  },

  /**
   * hook for observable hobbySelected$
   * @param id: string
   */
  useHobby: (id: string) => {
    const [hobby, setHobby] = useState<IHobby>({})

    useEffect(() => {
      // execute call
      async function getHobby() {
        await HobbyService.getHobby(id)
      }

      // afect observable
      HobbyStore.hobbySelected$.subscribe(value => setHobby(value))

      getHobby()
    }, [id])

    // return variable hook
    return hobby
  },
}
