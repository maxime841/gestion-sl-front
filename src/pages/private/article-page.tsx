import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardActivityOffice } from '@molecules/card-activity-office/card-activity-office'
import { CardArticleOffice } from '@molecules/card-article-office/card-article-office'
import { CardHobbyOffice } from '@molecules/card-hobby-office/card-hobby-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function ArticlePageOffice() {
  return (
    <section>
     {/* title page */}
     <TitlePagePrivate>Les articles</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
      <LinkBtn addClass='my-8 ml-12' children={'Ajouter un article'} link={'/form/article/create'}></LinkBtn>
        <CardArticleOffice />
      </div>
      </div>
    </section>
  )
}
