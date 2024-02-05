import {context} from '../providers/LoggsContext'
import {useContext, useEffect, useState} from 'react'
import { useState } from "react"
import LoggList from "./LoggList"

const LoggsListContainer = (props) => {
    
    const [loggs,setLoggs] =useState([])
    const contextValue = useContext(context)

    useEffect(()=>{
        setLoggs(contextValue.loggEntries)
    },[contextValue])
    
    //setear el valor del estado LOGGS trayendo (por ahora) los loggs del context, a futuro seria traerlo de la base de datos
    //entonces deberiamos linkear el contexto aca y traer la info

    return (
        <LoggList loggs={loggs}/>
    )

}

export default LoggsListContainer 