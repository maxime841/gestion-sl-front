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
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<TemplatePrivate />}>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
