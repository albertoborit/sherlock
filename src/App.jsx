import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './components/Login/Login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
