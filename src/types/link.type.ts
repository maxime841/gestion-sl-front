import { TComponentParent } from './component-parent.type'
import { IClub } from './models/club.model'

/**
 * type for all component
 */
export type TLink = TComponentParent & {
  link: string
  click?: () => void
  addClass?: string
  textColor?: string
  padding?: string
  hoverBg?: string
  bg?: string
  rounded?: string
  cible?: string
}

/**
 * type for link brand in header
 */
export interface TLinkBrandHeader {
  addClass?: string
}

/**
 * type of link primary
 */
export type TlinkPrimary = {
  link: string
  children: JSX.Element | JSX.Element[] | string | string[]
  addClass?: string
  bg?: string
}
