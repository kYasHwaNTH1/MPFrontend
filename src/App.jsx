import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Notfoundpage from './pages/Notfoundpage'
import {GoogleOAuthProvider as GP} from '@react-oauth/google'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
 <Route path='/' element={ <GP clientId='361787192045-js0r6f2fh4nve698khgu1a6hj3bhf9vo.apps.googleusercontent.com' > <Login/> </GP>  } />
 <Route path='*' element={<Notfoundpage/> } />

      </Routes>
 
    </Router>
  )
}

export default App
