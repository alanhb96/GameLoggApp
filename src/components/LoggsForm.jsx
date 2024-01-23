import { useForm } from "react-hook-form";

const LoggsForm = () => {

    const { register, handleSubmit, watch, formState:{ errors }} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name of the Game: </label>
            <input type='text' {...register('gameName')}/>

            <label>Date: </label>
            <input type='date' {...register('date')}/>

            <label>Number of Players: </label>
            <input type='number' {...register('playerCount')}/>

            <label>Winner: </label>
            <input type='text' {...register('winner')}/>

            <label>Points: </label>
            <input type='number' {...register('points')}/>

            <label>Comments: </label>
            <input type="text-area" {...register('comments')}/>

            <input type="submit"/>
        </form>
    )

}

export default LoggsForm