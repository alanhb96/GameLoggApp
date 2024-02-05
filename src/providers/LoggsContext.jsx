import {createContext, useState} from 'react'

export const context = createContext()
const Provider = context.Provider

const LoggsContext = (props) =>  {

    const [loggList,setLoggList]= useState([])

    const handleAddLogg = (data) => {
        const arrayCopy = [...loggList,data]
        setLoggList(arrayCopy)
    }

    const contextValue = {
        addLogg: handleAddLogg,
        loggEntries: loggList,
    } 

    return (
        <Provider value={contextValue}> 
            {props.children}
        </Provider>
    )

}

export default LoggsContext