import './App.css'
import {Route, Routes} from "react-router-dom"
import Landing from './views/Landing'
import NavBar from './components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import Home from './views/Home'
function App() {

  const location = useLocation()

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
