import LoggItem from "./LoggItem"

const LoggsList = (props) => {
    
    return (
        <section className="">
            {props.loggs.map((item)=>(
                <div className="">
                    <LoggItem item={item}/>
                </div>
            ))}
        </section>
    )

}

export default LoggsList