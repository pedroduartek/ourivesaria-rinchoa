import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'

const HomePage = lazy(async () => {
  const module = await import('../pages/HomePage')
  return { default: module.HomePage }
})

const RestauracaoPage = lazy(async () => {
  const module = await import('../pages/RestauracaoPage')
  return { default: module.RestauracaoPage }
})

const ContactosPage = lazy(async () => {
  const module = await import('../pages/ContactosPage')
  return { default: module.ContactosPage }
})

const CasamentosPage = lazy(async () => {
  const module = await import('../pages/CasamentosPage')
  return { default: module.CasamentosPage }
})

const NotFoundPage = lazy(async () => {
  const module = await import('../pages/NotFoundPage')
  return { default: module.NotFoundPage }
})

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/reparacao-manutencao-relogios" element={<RestauracaoPage />} />
        <Route path="/contactos" element={<ContactosPage />} />
        <Route path="/casamentos" element={<CasamentosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
