import {createContext, useState} from 'react'
import firebase from 'firebase/app'

export const context = createContext()
const Provider = context.Provider

const LoggsContext = (props) =>  {

    const [loggList,setLoggList]= useState([])
    const [logedIn,setLogedIn]= useState(false)
    const [userId,setUserId]= useState('')

    const handleAddLogg = (data) => {
        const arrayCopy = [...loggList,data]
        setLoggList(arrayCopy)
    }

    const handleUserId = (user) =>{
        setUserId(user)
    }

/*     const fetchUserLogs = async () => {
        try {
          const user = firebase.auth().currentUser;
          if (user) {
            const snapshot = await db.collection('logs').where('userId', '==', user.uid).get()
            const logs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setLoggList(logs)
          } else {
            console.error('No user signed in')
            return []
          }
        } catch (error) {
          console.error('Error fetching logs:', error)
          return []
        }
      } */

    const contextValue = {
        addLogg: handleAddLogg,
        loggEntries: loggList,
        isLogedIn: logedIn,
        userId: handleUserId,
    } 

    return (
        <Provider value={contextValue}> 
            {props.children}
        </Provider>
    )

}

export default LoggsContext