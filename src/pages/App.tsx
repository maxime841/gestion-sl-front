// import './App.css'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AcceuilPage from './public/acceuil-page'
import TemplatePublic from '../components/templates/template-public'
import { TemplatePrivate } from '../components/templates/template-private'
import { AuthGuard } from '../config/auth-gard/auth-gard'
import DescriptionPage from './public/description-page'
import HomePage from './public/home-page'
import AboutUsPage from './public/about-us-page'
import ClubPage from './public/club-page'
import ClubProfilPage from './public/club-profil-page'
import DjPage from './public/dj-page'
import DjProfilPage from './public/dj-profil-page'
import HostPage from './public/host-page'
import HostProfilPage from './public/host-profil-page'
import DancerPage from './public/dancer-page'
import DancerProfilPage from './public/dancer-profil-page'
import ShopPage from './public/shop-page'
import ShopProfilPage from './public/shop-profil-page'
import HobbyPage from './public/hobby-page'
import HobbyProfilPage from './public/hobby-profil-page'
import { LoginGuard } from '@config-app/login-guard/login-guard'
import LoginPage from './public/login-page'
import { DashboardPage } from './private/Dashboard-page'
import { ClubPageOffice } from './private/Club-page'
import { DancerPageOffice } from './private/Dancer-page'
import { DjPageOffice } from './private/Dj-page'
import { HobbyPageOffice } from './private/Hobbies-page'
import { LandPageOffice } from './private/Land-page'
import { TenantPageOffice } from './private/Tenant-page'
import { UserPageOffice } from './private/User-page'
import ProfilPage from './private/Profil-page'
import { HostPageOffice } from './private/Host-page'
import { ShopPageOffice } from './private/Shop-page'
import { FormAddLand } from '@molecules/forms/form-add-land'
import { UpdateLand } from './private/updateLand'
import { DeleteLand } from './private/deleteLand'
import { UpdateHobby } from './private/updateHobby'
import { DeleteHobby } from './private/deleteHobby'
import { FormAddHobby } from '@molecules/forms/form-add-hobby'
import { ActivityPageOffice } from './private/activity-page'
import { FormAddActivity } from '@molecules/forms/form-add-activity'
import { FormUpdateActivity } from '@molecules/forms/form-update-activity'
import { FormDeleteActivity } from '@molecules/forms/form-delete-activity'
import { FormAddClub } from '@molecules/forms/form-add-club'
import { FormUpdateClub } from '@molecules/forms/form-update-club'
import { FormDeleteClub } from '@molecules/forms/form-delete-club'
import { FormAddDj } from '@molecules/forms/form-add-dj'
import { FormUpdateDj } from '@molecules/forms/form-update-dj'
import { FormDeleteDj } from '@molecules/forms/form-delete-dj'
import { FormAddDancer } from '@molecules/forms/form-add-dancer'
import { FormUpdateDancer } from '@molecules/forms/form-update-dancer'
import { FormDeleteDancer } from '@molecules/forms/form-delete-dancer'
import { FormAddHost } from '@molecules/forms/form-add-host'
import { FormUpdateHost } from '@molecules/forms/form-update-host'
import { FormDeleteHost } from '@molecules/forms/form-delete-host'
import { FormAddShop } from '@molecules/forms/form-add-shop'
import { FormUpdateShop } from '@molecules/forms/form-update-shop'
import { FormDeleteShop } from '@molecules/forms/form-delete-shop'
import { ArticlePageOffice } from './private/article-page'
import { FormAddArticle } from '@molecules/forms/form-add-article'
import { FormUpdateArticle } from '@molecules/forms/form-update-article'
import { FormDeleteArticle } from '@molecules/forms/form-delete-article'
import LandProfilPage from './public/land-page-profil'

function App() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route path='/' element={<AcceuilPage />} />
      <Route path='/description' element={<DescriptionPage />} />
      <Route element={<TemplatePublic />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/club' element={<ClubPage />} />
        <Route path='/club/:clubId' element={<ClubProfilPage />} />
        <Route path='/dj' element={<DjPage />} />
        <Route path='/dj/:djId' element={<DjProfilPage />} />
        <Route path='/host' element={<HostPage />} />
        <Route path='/host/:hostId' element={<HostProfilPage />} />
        <Route path='/dancer' element={<DancerPage />} />
        <Route path='/dancer/:dancerId' element={<DancerProfilPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/shop/:shopId' element={<ShopProfilPage />} />
        <Route path='/hobby' element={<HobbyPage />} />
        <Route path='/hobby/:hobbyId' element={<HobbyProfilPage />} />
        <Route path='/land/:landId' element={<LandProfilPage />} />
        <Route element={<LoginGuard />} />
        <Route path='/login' element={<LoginPage />} />
        <Route />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<TemplatePrivate />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/lands' element={<LandPageOffice />} />
          <Route path='/form/land/create' element={<FormAddLand />} />
          <Route path='/land/:landId/form/update' element={<UpdateLand />} />
          <Route path='/land/:landId/form/delete' element={<DeleteLand />} />
          <Route path='/hobbies' element={<HobbyPageOffice />} />
          <Route path='/form/hobby/create' element={<FormAddHobby />} />
          <Route path='/hobby/:hobbyId/form/update' element={<UpdateHobby />} />
          <Route path='/hobby/:hobbyId/form/delete' element={<DeleteHobby />} />
          <Route path='/activities' element={<ActivityPageOffice />} />
          <Route path='/form/activity/create' element={<FormAddActivity />} />
          <Route path='/activity/:activityId/form/update' element={<FormUpdateActivity />} />
          <Route path='/activity/:activityId/form/delete' element={<FormDeleteActivity />} />
          <Route path='/tenants' element={<TenantPageOffice />} />
          <Route path='/clubs' element={<ClubPageOffice />} />
          <Route path='/form/club/create' element={<FormAddClub />} />
          <Route path='/club/:clubId/form/update' element={<FormUpdateClub />} />
          <Route path='/club/:clubId/form/delete' element={<FormDeleteClub />} />
          <Route path='/djs' element={<DjPageOffice />} />
          <Route path='/form/dj/create' element={<FormAddDj />} />
          <Route path='/dj/:djId/form/update' element={<FormUpdateDj />} />
          <Route path='/dj/:djId/form/delete' element={<FormDeleteDj />} />
          <Route path='/dancers' element={<DancerPageOffice />} />
          <Route path='/form/dancer/create' element={<FormAddDancer />} />
          <Route path='/dancer/:dancerId/form/update' element={<FormUpdateDancer />} />
          <Route path='/dancer/:dancerId/form/delete' element={<FormDeleteDancer />} />
          <Route path='/hosts' element={<HostPageOffice />} />
          <Route path='/form/host/create' element={<FormAddHost />} />
          <Route path='/host/:hostId/form/update' element={<FormUpdateHost />} />
          <Route path='/host/:hostId/form/delete' element={<FormDeleteHost />} />
          <Route path='/shops' element={<ShopPageOffice />} />
          <Route path='/form/shop/create' element={<FormAddShop />} />
          <Route path='/shop/:shopId/form/update' element={<FormUpdateShop />} />
          <Route path='/shop/:shopId/form/delete' element={<FormDeleteShop />} />
          <Route path='/articles' element={<ArticlePageOffice />} />
          <Route path='/form/article/create' element={<FormAddArticle />} />
          <Route path='/article/:articleId/form/update' element={<FormUpdateArticle />} />
          <Route path='/article/:articleId/form/delete' element={<FormDeleteArticle />} />
          <Route path='/users' element={<UserPageOffice />} />
          <Route path='/user/profil' element={<ProfilPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
