import React from 'react'
import HomeIcon from '../../atoms/icons/home-icon'
import LinkBtn from '../../atoms/links/link-btn'
import ClubIcon from '../../atoms/icons/club-icon'
import DjIcon from '../../atoms/icons/dj-icon'
import HostIcon from '../../atoms/icons/host-icon'
import DancerIcon from '../../atoms/icons/dancer-icon'
import ShopIcon from '../../atoms/icons/shop-icon'
import LoisirIcon from '@atoms/icons/loisir-icon'
import MenuDropdownLand from '@molecules/menu-dropdown-land/menu-dropdown-land'

function MenuPrimary () {
  return (
    <ul className='flex items-center justify-around hidden sm:visible md:flex'>
      {/* link home */}
      <li>
        <LinkBtn link='/home' addClass='w-10 h-5 mx-1'>
          <HomeIcon size='w-5 h-5'/>
          <span className='ml-2'>Home</span>
        </LinkBtn>
      </li>

      {/* link club */}
      <li>
        <LinkBtn link='/club' addClass='w-10 h-5 mx-1'>
          <ClubIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Clubs</span>
        </LinkBtn>
      </li>

      {/* link djs */}
      <li>
        <LinkBtn link='/dj' addClass='w-10 h-5 mx-1'>
          <DjIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Djs</span>
        </LinkBtn>
      </li>

      {/* link hosts */}
      <li>
        <LinkBtn link='/host' addClass='w-10 h-5 mx-1'>
          <HostIcon size='w-5 h-10' />
          <span className='ml-2'>Nos Hosts</span>
        </LinkBtn>
      </li>

      {/* link dancers */}
      <li>
        <LinkBtn link='/dancer' addClass='w-10 h-5 mx-1'>
          <DancerIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Danceurs</span>
        </LinkBtn>
      </li>

      {/* link Shop */}
      <li>
        <LinkBtn link='/shop' addClass='w-10 h-4 mx-1'>
          <ShopIcon size='w-5 h-5' />
          <span className='ml-2'>Nos Shops</span>
        </LinkBtn>
      </li>

      {/* link loisir */}
      <li>
        <LinkBtn link='/hobby' addClass='w-10 h-5 mx-1'>
          <LoisirIcon size='w-5 h-5'/>
          <span className='ml-2'>Loisir</span>
        </LinkBtn>
      </li>
      {/* dropdown land */}
      <MenuDropdownLand addClass='mr-2 ml-2'>
        Terrains
      </MenuDropdownLand>
    </ul>
  )
}

export default MenuPrimary
