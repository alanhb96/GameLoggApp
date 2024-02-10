import {context} from '../providers/LoggsContext'
import {useContext, useState} from 'react'
import LoggDetailContainer from './LoggDetailContainer'
import LoggDetailReduced from './LoggDetailReduced'

const LoggItem = (props) =>{

    const [dropDown,setDropDown]=useState(false)

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    return(
        <>
            {dropDown
            ?
            //vertical info = vertical design
            (<section className="w-96 bg-gray-300 p-4 rounded shadow-lg flex flex-col items-center space-y-4">
                <LoggDetailContainer data={props.item}/>
                <button onClick={toggleDropDown}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pop</button>
            </section>)
            :(
            //horizontal info = horizontal design
            <section className="w-110 bg-gray-300 p-4 rounded font-bold uppercase flex justify-between items-center space-x-16">
                <LoggDetailReduced data={props.item}/>
                <button onClick={toggleDropDown} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Drop</button>
            </section>
            )}
        </>
    )

}

export default LoggItem