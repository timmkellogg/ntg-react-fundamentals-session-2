import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SavedPage from './pages/SavedPage'
import SearchPage from './pages/SearchPage'
import RequireAuth from './components/RequireAuth'

import { AuthProvider } from './contexts/authContext'

function App() {
  return (
      <AuthProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />

            <Route element={<RequireAuth />}>
              <Route path='/search' element={<SearchPage />} />
              <Route path='/saved' element={<SavedPage />} />
            </Route>

            <Route path='*' element={<div>404. Page not found.</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
