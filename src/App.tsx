import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import BookingPage from './pages/BookingPage'
import HomePage from './pages/HomePage'
import PrivateRoute from './components/auth/PrivateRoute'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/layout/Layout'
import { ToastWrapper } from 'keep-react'
import ScrollTop from './components/ui/ScrollTOp'

function App() {

  return (
    <div>
      <ScrollTop />
      <ToastWrapper
        toastOptions={{
          classNames: {
            toast: 'dark:bg-metal-900 border dark:border-metal-800 border-white bg-white',
            title: 'text-metal-900 dark:text-white',
            description: 'dark:text-metal-300 text-metal-600',
            actionButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            cancelButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            closeButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            error: 'text-error-500',
            success: 'text-success-500',
            warning: 'text-warning-500',
            info: 'text-primary-500',
          },
        }}
      />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
