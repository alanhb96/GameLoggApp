import LoggItem from "./LoggItem"

const LoggsList = (props) => {
    
    return (
        <section className="mt-5">
            {props.loggs.map((item)=>(
                <div key={item.id} className="mt-5">
                    <LoggItem item={item}/>
                </div>
            ))} 
        </section>
    )

}

export default LoggsList