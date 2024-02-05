import { useForm } from "react-hook-form";
import {useContext} from 'react'
import {context} from '../providers/LoggsContext'

const LoggsForm = () => {

    const contextValue = useContext(context)

    const { register, handleSubmit, watch, formState:{ errors }} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        contextValue.addLogg(data)
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