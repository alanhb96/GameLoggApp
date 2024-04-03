import ProfileContainer from './components/ProfileContainer'
import LoggsContainer from './components/LoggsContainer'
import LogIn from './components/LogIn'
import NavBar from './components/NavBar'
import { auth } from './firebase/firebase'
import { ProtectedRoute } from './components/ProtectedRoute'
import { context } from './providers/LoggsContext'
import LoggsContext from './providers/LoggsContext'
import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'


function App() {

  const contextValue = useContext(context)
  const [user,setUser] = useState(null)
  const [isFetching,setIsFetching] = useState(true)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })
    return () => unsubscribe()
  },[])

  if(isFetching){
    return <h2>IS LOADING...</h2>
  }

  return (
    <>
      <BrowserRouter>
        <LoggsContext>
          <NavBar />
          <Routes>
            <Route path='/' element={<LogIn user={user}/>}/>
            <Route path='/home' element={<ProtectedRoute user={user}><LoggsContainer/></ProtectedRoute>}/>
            <Route path='/profile' element={<ProfileContainer />} />
          </Routes>
        </LoggsContext>
      </BrowserRouter>
    </>
  )
}

export default App
