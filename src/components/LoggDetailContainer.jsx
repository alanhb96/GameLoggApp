
const LoggsDetailContainer = (props) => {
    
    return (
        <>
            <div>{props.data.gameName}</div>
            <div>{props.data.date}</div>
            <div>{props.data.playerCount}</div>
            <div>{props.data.winner}</div>
            <div>{props.data.points}</div>
            <div>{props.data.comments}</div>
        </>
    )

}

export default LoggsDetailContainer