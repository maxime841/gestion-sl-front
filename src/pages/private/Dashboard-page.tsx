import TitlePagePrivate from '@atoms/title/title'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import { SectionStatDashboard } from '@organisms/section-stat-dashboard.tsx/section-stat-dashboard'
import React from 'react'

export function DashboardPage() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Tableau de bord</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />

      {/* section stats */}
      <div className='mt-8'>
        <SectionStatDashboard />
      </div>
      </div>
    </section>
  )
}
