import React from 'react'
import { IconContext } from 'react-icons'
import { FaGrav } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NavHeader = () => {
  return (
    <nav className="py-4 h-1/6">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="text-white text-xl font-semibold">
                        <IconContext.Provider value={{className: 'text-4xl'}}>
                        <Link to={'/'}><FaGrav /></Link>
                        </IconContext.Provider>
                    </div>
                    <div className="space-x-4">
                        <Link to={'/'} className="text-white hover:text-gray-200 hover:underline uppercase font-bold">Residential</Link>
                        <Link to={'enterprise'} className="text-white hover:text-gray-200 hover:underline uppercase font-bold">Enterprise</Link>
                        <Link to={'cars'} className="text-white hover:text-gray-200 hover:underline uppercase font-bold">Cars</Link>
                        <Link to={'tv'} className="text-white hover:text-gray-200 hover:underline uppercase font-bold">TV</Link>
                    </div>
                    <div className="space-x-2">
                        <Link to={'login'} className="text-white hover:text-gray-200 hover:underline uppercase font-bold">Login</Link>
                        <Link to={'support'} className="text-white hover:text-gray-200 hover:underline uppercase font-bold">Support</Link>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default NavHeader
