// import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AcceuilPage from './public/acceuil-page'
import TemplatePublic from '../components/templates/template-public'
import { TemplatePrivate } from '../components/templates/template-private'
import { AuthGuard } from '../config/auth-gard/auth-gard'
import DescriptionPage from './public/description-page'
import HomePage from './public/home-page'
import AboutUsPage from './public/about-us-page'
import ClubPage from './public/club-page'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AcceuilPage />} />
      <Route path='/description' element={<DescriptionPage />} />
      <Route element={<TemplatePublic />}>
      <Route path='/home' element={<HomePage />} />
      <Route path='/aboutus' element={<AboutUsPage />} />
      <Route path='/club' element={<ClubPage />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<TemplatePrivate />}>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
