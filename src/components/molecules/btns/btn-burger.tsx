import React from 'react'
import { Store } from '../../../store/store'
import { Btn } from '../../atoms/btns/btn'
import { TBtnMenuBurger } from '../../../types/btn.type'
import MenuBurgerIcon from '../../atoms/icons/burger-icon'
import LinkBtn from '../../atoms/links/link-btn'
import HomeIcon from '../../atoms/icons/home-icon'
import ClubIcon from '../../atoms/icons/club-icon'

/**
 * btn dark mode with change icon moon or sun
 * @returns
 */
function BtnIconMenuBurger({ addClass }: TBtnMenuBurger) {
  const menuBurger = Store.menuBurger.useBurgerMenu()

  return (
    <div className={`relative display sm:flex md:hidden ${addClass}`}>
      {/* btn dropdown */}
      <Btn click={() => Store.menuBurger.toggleStateMenuBurger(menuBurger)}>
        <MenuBurgerIcon size='w-4 h-4' />
      </Btn>

      {/* menu burger */}
      {menuBurger ? (
        <ul
          className='flex-col items-center justify-around display sm:flex md:invisible absolute top-16 left-4 w-32
            p-2 bg-fond_color_button
            rounded-lg z-10'>
          {/* link home */}
          <li>
            <LinkBtn link='/'>
              <HomeIcon size='w-5 h-5' />
              <span className='ml-2'>Home</span>
            </LinkBtn>
          </li>

          {/* link club */}
          <li className='mt-2'>
            <LinkBtn link='/club'>
              <ClubIcon size='w-5 h-5' />
              <span className='ml-2'>Nos Club</span>
            </LinkBtn>
          </li>

          {/* link djs */}
          <li className='mt-2'>
            <LinkBtn link='/dj'>
              <ClubIcon size='w-5 h-5' />
              <span className='ml-2'>Nos Djs</span>
            </LinkBtn>
          </li>

          {/* link host */}
          <li className='mt-2'>
            <LinkBtn link='/host'>
              <ClubIcon size='w-5 h-5' />
              <span className='ml-2'>Nos Hosts</span>
            </LinkBtn>
          </li>

          {/* link dancer */}
          <li className='mt-2'>
            <LinkBtn link='/dancer'>
              <ClubIcon size='w-5 h-5' />
              <span className='ml-2'>Nos Danseurs</span>
            </LinkBtn>
          </li>

          {/* link shop */}
          <li className='mt-2'>
            <LinkBtn link='/shop'>
              <ClubIcon size='w-5 h-5' />
              <span className='ml-2'>Nos Shops</span>
            </LinkBtn>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default BtnIconMenuBurger
