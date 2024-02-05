import { useState } from "react";
import LoggsForm from "./LoggsForm";
import LoggsListContainer from "./LoggsListContainer";

const LoggsContainer = (props) => {



    return(
        <>
            <LoggsForm/>
            <LoggsListContainer/>
        </>
    )

}

export default LoggsContainer