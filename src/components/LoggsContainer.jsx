import LoggsForm from "./LoggsForm";
import LoggsListContainer from "./LoggsListContainer";

const LoggsContainer = () => {

    return(
        <>
            <LoggsForm/>
            <LoggsListContainer /> //agregar un parametro que traiga cuantos logs haya en la dB 
        </>
    )

}

export default LoggsContainer