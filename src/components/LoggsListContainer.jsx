import {context} from '../providers/LoggsContext'
import {useContext, useEffect, useState} from 'react'
import LoggList from "./LoggList"
import firebase from 'firebase/app'

const LoggsListContainer = (props) => {
    
    const [loggs,setLoggs] =useState([])
    const contextValue = useContext(context)

    useEffect(()=>{
        /*  const loggList = contextValue.loggEntries
        setLoggs(loggList) */

        const fetchUserLogs = async () => {
            try {
              const user = firebase.auth().currentUser;
              if (user) {
                const snapshot = await db.collection('logs').where('userId', '==', user.uid).get()
                const logs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setLoggs(logs)
              } else {
                console.error('No user signed in')
                return []
              }
            } catch (error) {
              console.error('Error fetching logs:', error)
              return []
            }
        }   

        fetchUserLogs()

        console.log(loggs)  
    },[props.formVisibility])
    
    //setear el valor del estado LOGGS trayendo (por ahora) los loggs del context, a futuro seria traerlo de la base de datos
    //entonces deberiamos linkear el contexto aca y traer la info

    return (
        <LoggList loggs={loggs}/>
    )

}

export default LoggsListContainer 