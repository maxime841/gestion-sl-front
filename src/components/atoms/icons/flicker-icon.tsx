import React from 'react'
import { TIcons } from '../../../types/icon.type'

/**
 * Icone Flicker
 * @param size? string | undefined
 * @param color? string | null | undefined
 * @returns
 */
function FlickerIcon ({ color, size }: TIcons) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px">
            <linearGradient
                id="JgUXPL7C3ZUWF61kqVZ_Sa"
                x1="2.71"
                x2="46.625"
                y1="2.958"
                y2="46.362"
                gradientUnits="userSpaceOnUse">
                    <stop
                        offset="0"
                        stop-color="#f0f0f0"/>
                    <stop offset="1" stop-color="#bbc1c4"/>
            </linearGradient>
            <path
                fill="url(#JgUXPL7C3ZUWF61kqVZ_Sa)"
                d="M6,8c0-1.1,0.9-2,2-2h32c1.1,0,2,0.9,2,2v32c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V8z"/>
            <circle
                cx="16"
                cy="24"
                r="8"
                opacity=".05"/>
            <circle
                cx="16"
                cy="24"
                r="7.5"
                opacity=".07"/>
            <circle
                cx="32"
                cy="24"
                r="8"
                opacity=".05"/>
            <circle
                cx="32"
                cy="24"
                r="7.5"
                opacity=".07"/>
            <linearGradient
                id="JgUXPL7C3ZUWF61kqVZ_Sb"
                x1="11.232"
                x2="20.768"
                y1="18.875"
                y2="29.125"
                gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#0d61a9"/>
            <stop offset="1" stop-color="#16528c"/>
            </linearGradient>
            <path
                fill="url(#JgUXPL7C3ZUWF61kqVZ_Sb)"
                d="M16,17c-3.866,0-7,3.134-7,7s3.134,7,7,7s7-3.134,7-7S19.866,17,16,17z"/>
            <path
                fill="#ed3675"
                d="M32,17c-3.866,0-7,3.134-7,7s3.134,7,7,7s7-3.134,7-7S35.866,17,32,17z"/>
    </svg>

  )
}

export default FlickerIcon