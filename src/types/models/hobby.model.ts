import { IActivity } from './activity.model'
import { IPicture } from './picture.type'

/**
* type for all hobbies
*/
export interface IHobby {
 id?: number
 name?: string
 owner?: string
 created_at?: Date
 updated_at?: Date
 presentation?: string
 picture?: IPicture
 pictures?: IPicture[]
 activities?: IActivity[]
}

/**
* type for response one hobby
*/
export interface IHobbyResponse {
 hobby: IHobby
}

/**
* type for response all hobbies
*/
export interface IHobbiesResponse {
 hobbies: IHobby[]
}

/**
* type for get profil page hobby
*/
export type TPageProfilHobby = {
 hobbyCurrent: IHobby
}
