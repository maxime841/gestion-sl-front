import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardShopOffice } from '@molecules/card-shop-office/card-shop-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function ShopPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes shops</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
        <div className='mt-8'>
          <LinkBtn addClass='my-8 ml-12' children={'Ajouter un magasin'} link={'/form/shop/create'}></LinkBtn>
          <CardShopOffice />
        </div>
      </div>
    </section>
  )
}
