import { IPicture } from './picture.type'

/**
* type for all activities
*/
export interface ITenant {
 id?: number
 name?: string
 rent?: string
 created_at?: Date
 updated_at?: Date
 picture?: IPicture
}

/**
* type for response all activities
*/
export interface ITenantsResponse {
 tenants: ITenant[]
}

export interface IAddTenantResponse {
 addTenant?: ITenant
}

export interface IUpdateTenantResponse {
 updateTenant?: ITenant
}

export interface IDeleteTenantResponse {
 deleteTenant?: ITenant
}
