import { IPicture } from './picture.type'

/**
 * type for all activities
 */
export interface IActivity {
    id?: number
    name?: string
    owner?: string
    created_at?: Date
    updated_at?: Date
    presentation?: string
    picture?: IPicture
    pictures?: IPicture[]
    price?: number
    tag?: string
  }

  export type TActivityProfil = {
    activityCurrent: IActivity
  }
