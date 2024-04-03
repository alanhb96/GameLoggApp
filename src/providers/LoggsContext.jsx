import {createContext, useState} from 'react'

export const context = createContext()
const Provider = context.Provider

const LoggsContext = (props) =>  {

    const [loggList,setLoggList]= useState([])
    const [logedIn,setLogedIn]= useState(false)

    const handleAddLogg = (data) => {
        const arrayCopy = [...loggList,data]
        setLoggList(arrayCopy)
    }

    const contextValue = {
        addLogg: handleAddLogg,
        loggEntries: loggList,
        isLogedIn: logedIn,
    } 

    return (
        <Provider value={contextValue}> 
            {props.children}
        </Provider>
    )

}

export default LoggsContext