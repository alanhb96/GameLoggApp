import { useState } from "react";
import LoggsForm from "./LoggsForm";
import LoggsListContainer from "./LoggsListContainer";

const LoggsContainer = (props) => {
    
    const [isFormVisible, setIsFormVisible] = useState(false)

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
      }
 
    return(
    <>
        {isFormVisible
        ?
        (<LoggsForm onClose={toggleFormVisibility}/>)
        :
        (
        <div className="flex flex-col items-center justify-start h-full pt-16">
            <button className="w-2/3 lg:w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleFormVisibility}>New Logg Entry</button>
            <LoggsListContainer />
        </div>          
        )}
    </>
    )

}

export default LoggsContainer