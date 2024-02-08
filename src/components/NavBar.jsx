import { context } from "../providers/LoggsContext"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa"


const NavBar = () => {

    const contextValue = useContext(context)

    return(
        <header>
            <nav className="bg-blue-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                        <Link to="/" className="text-2xl font-semibold text-white hover:text-blue-500 mx-auto">gameLogg</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/profile" className="text-white hover:text-blue-500"><FaUser className="text-xl"/></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default NavBar