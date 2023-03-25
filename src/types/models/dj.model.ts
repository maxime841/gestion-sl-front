import { IPicture } from './picture.type'

/**
 * type for all clubs
 */
export interface IDj {
    id?: number
    name?: string
    created_at?: Date
    updated_at?: Date
    presentation?: string
    picture?: IPicture
    pictures?: IPicture[]
  }
