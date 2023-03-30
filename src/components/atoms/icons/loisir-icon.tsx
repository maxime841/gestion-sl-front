import { TIcons } from '../../../types/icon.type'
import React from 'react'
import Loisir from '../../../assets/picture/manette.png'

/**
 * Icone Loisir
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
function LoisirIcon ({ color, size }: TIcons) {
  return (
    <img src={Loisir} alt='représentation des loisirs' className='w-5 h-5'/>
  )
}

export default LoisirIcon
