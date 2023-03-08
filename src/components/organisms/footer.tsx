import React from 'react'
import LinkText from '@atoms/links/link-text'
import Copyright from '@atoms/copyrights/copyright'
import InstagramIcon from '@atoms/icons/instagram-icon'
import FlickerIcon from '@atoms/icons/flicker-icon'
import DiscordIcon from '@atoms/icons/discord-icon'

function Footer() {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
      <div className='flex flex-col sm:flex-row'>
        <LinkText link='/aboutus'>A propos de nous</LinkText>
        <LinkText link='/mentions'>Mentions legales</LinkText>
        <LinkText link='/contact'>Contact</LinkText>
        <LinkText link='/reglement'>Réglement interieur</LinkText>
      </div>
      <div>
        <div className='grid grid-flow-col gap-4'>
          <LinkText link=''>
            <InstagramIcon />
          </LinkText>
          <LinkText link=''>
            <FlickerIcon />
          </LinkText>
          <LinkText link=''>
            <DiscordIcon />
          </LinkText>
        </div>
      </div>
      <div>
        <Copyright>
          Copyright © 2022 - All right reserved by Maxime Poirot & John Haimez
          Ltd
        </Copyright>
      </div>
    </footer>
  )
}

export default Footer
