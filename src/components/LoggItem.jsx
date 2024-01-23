import LoggsContex from '../providers/LoggsContext'
import {useContext, useState} from 'react'

const LoggItem = () =>{

    const context = useContext(LoggsContex)

    const [dropDown,useDropDown]=useState(false)

    return(
        <>
            dropDown
            :
            <LoggDetailContainer/>
            <button onClick={useDropDown(false)}>Pop</button>
            ?
            <LoggDetailReduced/>
            <button onClick={useDropDown(true)}>Drop</button>
        </>
    )

}

export default LoggItem