import { context } from "../providers/LoggsContext"
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const contextValue = useContext(context)

    return(
        <header>
            <nav className="bg-purple-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/'><h1 className="self-center text-2xl font-semibold text-white hover:text-blue-500">gameLogg</h1></Link>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li><Link to="/profile" className="nav-link">Profile</Link></li>
                        </ul>
                    </div>    
                </div>
            </nav>
        </header>
    )
}


export default NavBar