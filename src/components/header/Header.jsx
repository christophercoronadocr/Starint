import { IconContext } from 'react-icons';
import { FaGrav, FaArrowDown } from "react-icons/fa";
import NavHeader from '../navs/NavHeader';
import FormularioHeader from '../Forms/FormularioHeader';



const Header = () => {
    return (
        <div className="bg-cover bg-center h-screen bg-[url('https://api.starlink.com/public-files/Marketing_LandingFeatured_Redesign.webp')]">
            <NavHeader />
            {/* <Header2></Header2> */}
            <div className='flex-row text-center px-20 pt-1 h-2/3'>
                <div className='flex items-center justify-center'>
                    <IconContext.Provider value={{ className: "text-7xl text-white mb-5" }}>
                        <FaGrav />
                    </IconContext.Provider>
                </div>
                <h1 className='text-5xl font-serif font-bold mb-2 text-white'>ORDER STARINT</h1>
                <h2 className='text-xl font-serif text-white'
                >Starlink provides high-speed, low-latency broadband internet across the globe.
                    Within each coverage area, orders are fulfilled on a first-come, first-served basis.</h2>
            </div>
            <div className='grid h-1/6'>
                <div className='flex items-end justify-center'>
                    <FormularioHeader />
                </div>
                <div className='grid grid-cols-1 w-full text-center'>
                    <p className='text-white font-bold'>
                        <a href='#' className='hover:text-gray-400 transition'>VIEW AVAILABILITY MAP</a>
                    </p>
                    <p className='text-gray-500'>By clicking order now, you agree to our {('')}
                        <a href='#' className='text-gray-200 underline hover:text-gray-400 transition'>Privacy Policy</a></p>
                    <div className='flex items-center justify-center'>
                    <IconContext.Provider value={{ className: "text-2xl text-white" }}>
                        <FaArrowDown />
                    </IconContext.Provider>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Header
