import { IHost } from '@types-app/models/host.model'
import { useEffect, useState } from 'react'
import { HostService } from './host.service'
import { HostStore } from './host.store'

export const HostHook = {
  /**
   * hook for observable hosts$
   */
  useHosts: () => {
    const [hosts, setHosts] = useState<IHost[]>([])

    useEffect(() => {
      async function getHosts() {
        await HostService.getAllHosts()
      }
      HostStore.hosts$.subscribe(value => setHosts(value))

      getHosts()
    }, [])

    return hosts
  },

  /**
   * hook for observable hostSelected$
   * @param id: string
   */
  useHost: (id: string) => {
    const [host, setHost] = useState<IHost>({})

    useEffect(() => {
      // execute call
      async function getHost() {
        await HostService.getHost(id)
      }

      // afect observable
      HostStore.hostSelected$.subscribe(value => setHost(value))

      getHost()
    }, [id])

    // return variable hook
    return host
  },
}
