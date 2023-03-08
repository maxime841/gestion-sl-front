import './app.css'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import TemplatePublic from '@templates/template-public'
import AcceuilPage from '@pages/public/acceuil-page'
import { TemplatePrivate } from '@templates/template-private'
import { AuthGuard } from '@config-app/auth-gard/auth-gard'

function App() {
  return (
    <Routes>
      <Route path='/acceuil' element={<AcceuilPage />} />
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
