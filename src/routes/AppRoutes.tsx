import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { CasamentosPage } from '../pages/CasamentosPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { RestauracaoPage } from '../pages/RestauracaoPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/restauro-relogios" element={<RestauracaoPage />} />
        <Route path="/casamentos" element={<CasamentosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

