import { IActivity } from '@types-app/models/activity.model'
import { useEffect, useState } from 'react'
import { ActivityService } from './activity.service'
import { ActivityStore } from './activity.store'

export const ActivityHook = {
  /**
   * hook for observable activities$
   */
  useActivities: () => {
    const [activities, setActivities] = useState<IActivity[]>([])

    useEffect(() => {
      async function getActivities() {
        await ActivityService.getAllActivities()
      }
      ActivityStore.activities$.subscribe(value => setActivities(value))

      getActivities()
    }, [])

    return activities
  },

  /**
   * hook for observable activitySelected$
   * @param id: string
   */
  useActivity: (id: string) => {
    const [activity, setActivity] = useState<IActivity>({})

    useEffect(() => {
      // execute call
      async function getActivity() {
        await ActivityService.getActivity(id)
      }

      // afect observable
      ActivityStore.activitySelected$.subscribe(value => setActivity(value))

      getActivity()
    }, [id])

    // return variable hook
    return activity
  },
}
