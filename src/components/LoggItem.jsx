import {context} from '../providers/LoggsContext'
import {useContext, useState} from 'react'
import LoggDetailContainer from './LoggDetailContainer'
import LoggDetailReduced from './LoggDetailReduced'

const LoggItem = (props) =>{

    const [dropDown,useDropDown]=useState(false)

    return(
        <>
            {dropDown
            ?
            //vertical info = vertical design
            (<section className=''>
                <LoggDetailContainer data={props.item}/>
                <button onClick={useDropDown(!dropDown)}>Pop</button>
            </section>)
            :(
            //horizontal info = horizontal design
            <section className=''>
                <LoggDetailReduced data={props.item}/>
                <button onClick={useDropDown(!dropDown)}>Drop</button>
            </section>
            )}
        </>
    )

}

export default LoggItem