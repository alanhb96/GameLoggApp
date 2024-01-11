/* import LoggsContext from './providers/LoggsContext'*/
import ProfileContainer from './components/ProfileContainer'
import LoggsContainer from './components/LoggsContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LoggsContainer/>}/>
          <Route path='/profile' element={<ProfileContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
