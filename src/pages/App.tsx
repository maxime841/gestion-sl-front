// import './App.css'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AcceuilPage from './public/acceuil-page'
import TemplatePublic from '../components/templates/template-public'
import { TemplatePrivate } from '../components/templates/template-private'
import { AuthGuard } from '../config/auth-gard/auth-gard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AcceuilPage />} />
      <Route element={<TemplatePublic />}>
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<TemplatePrivate />}>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
