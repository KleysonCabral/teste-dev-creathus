import { Routes, Route } from 'react-router-dom'

import { Catalog } from './pages/Catalog'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Catalog />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}