import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { context } from '../providers/LoggsContext'
import { db } from './firebase/firebase'
import firebase from 'firebase/app'

const LoggsForm = ({ onClose }) => {
    const contextValue = useContext(context)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const postLog = async (logData) => {
        try {
          // Get the currently authenticated user
          const user = firebase.auth().currentUser
          if (user) {
            // Add the user's ID to the log data
            logData.userId = user.uid;
            await db.collection('logs').add(logData)
            console.log('Log posted successfully')
          } else {
            console.error('No user signed in')
          }
        } catch (error) {
          console.error('Error posting log:', error)
        }
    }

    /*  const handleDbPost = async (event) => {
        event.preventDefault();
        const logData = {
          // Get log data from form fields
          gameName: event.target.gameName.value,
          date: event.target.date.value,
          playerCount: event.target.playerCount.value,
          winner: event.target.winner.value,
          points: event.target.points.value,
          comments: event.target.comments.value,
        };
        await postLog(logData);
        } */

    const onSubmit = (data) => {
        console.log(data)
        //contextValue.addLogg(data)
        const logData = {
            // Get log data from form fields
            gameName: data.target.gameName.value,
            date: data.target.date.value,
            playerCount: data.target.playerCount.value,
            winner: data.target.winner.value,
            points: data.target.points.value,
            comments: data.target.comments.value,
          };
        postLog(logData)
        onClose()
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-2/5">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <label htmlFor="gameName">Name of the Game:</label>
                    <input id="gameName" type='text' {...register('gameName')} className="bg-gray-200 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:bg-white focus:border-blue-500" />

                    <label htmlFor="date">Date:</label>
                    <input id="date" type='date' {...register('date')} className="bg-gray-200 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:bg-white focus:border-blue-500" />

                    <label htmlFor="playerCount">Number of Players:</label>
                    <input id="playerCount" type='number' {...register('playerCount')} className="bg-gray-200 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:bg-white focus:border-blue-500" />

                    <label htmlFor="winner">Winner:</label>
                    <input id="winner" type='text' {...register('winner')} className="bg-gray-200 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:bg-white focus:border-blue-500" />

                    <label htmlFor="points">Points:</label>
                    <input id="points" type='number' {...register('points')} className="bg-gray-200 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:bg-white focus:border-blue-500" />

                    <label htmlFor="comments">Comments:</label>
                    <textarea id="comments" {...register('comments')} className="bg-gray-200 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:bg-white focus:border-blue-500" />

                    <input className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value='Submit' type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default LoggsForm