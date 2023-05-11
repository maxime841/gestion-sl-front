import { EdivisorSize, Tdivisor } from '@types-app/divisors.type'
import React from 'react'
import './divisor.css'

/**
 * divisor
 * @param color defaultProps string;
 * @param marginY defaultProps string;
 * @returns
 */
export function Divisor({ sizeModel = EdivisorSize.M }: Tdivisor) {
  return (
    <div
      className={`
      ${sizeModel === EdivisorSize.S ? 'divisor-small' : null}
      ${sizeModel === EdivisorSize.M ? 'divisor-normal' : null}
      ${sizeModel === EdivisorSize.L ? 'divisor-large' : null}
      `}
    />
  )
}
