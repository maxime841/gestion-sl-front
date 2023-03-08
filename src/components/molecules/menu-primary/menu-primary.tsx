import React from 'react'
import HomeIcon from '@atoms/icons/home-icon'
import LinkBtn from '@atoms/links/link-btn'
import ClubIcon from '@atoms/icons/club-icon'
import DjIcon from '@atoms/icons/dj-icon'
import HostIcon from '@atoms/icons/host-icon'
import DancerIcon from '@atoms/icons/dancer-icon'
import ShopIcon from '@atoms/icons/shop-icon'

function MenuPrimary () {
  return (
    <ul className='flex items-center justify-around hidden sm:visible md:flex'>
      {/* link home */}
      <li>
        <LinkBtn link='/'>
          <HomeIcon size='w-5 h-5' />
          <span className='ml-2'>Home</span>
        </LinkBtn>
      </li>

      {/* link club */}
      <li>
        <LinkBtn link='/club'>
          <ClubIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Clubs</span>
        </LinkBtn>
      </li>

      {/* link djs */}
      <li>
        <LinkBtn link='/dj'>
          <DjIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Djs</span>
        </LinkBtn>
      </li>

      {/* link hosts */}
      <li>
        <LinkBtn link='/host'>
          <HostIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Hosts</span>
        </LinkBtn>
      </li>

      {/* link dancers */}
      <li>
        <LinkBtn link='/dancer'>
          <DancerIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Danceurs</span>
        </LinkBtn>
      </li>

      {/* link Shop */}
      <li>
        <LinkBtn link='/shop'>
          <ShopIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Shops</span>
        </LinkBtn>
      </li>
    </ul>
  )
}

export default MenuPrimary
