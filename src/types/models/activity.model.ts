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
 activities?: IActivity[]
}

/**
* type for response one activity
*/
export interface IActivityResponse {
 updateActivity: IActivity
 activity: IActivity
}

/**
* type for response all activities
*/
export interface IActivitiesResponse {
 activities: IActivity[]
}

export interface IAddActivityResponse {
 addActivity?: IActivity
}

export interface IUpdateActivityResponse {
 updateActivity?: IActivity
}

export interface IDeleteActivityResponse {
 deleteActivity?: IActivity
}

/**
* type for get profil page activity
*/
export type TActivityProfil = {
    activityCurrent: IActivity
   }
