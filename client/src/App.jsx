import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {Route, Routes} from "react-router-dom"
import Landing from './views/Landing'
import NavBar from './components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'
import Home from './views/Home'
function App() {


  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
