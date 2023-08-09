import { IconContext } from 'react-icons';
import { FaGrav, FaArrowDown } from "react-icons/fa";
import NavHeader from '../navs/NavHeader';
import FormularioHeader from '../Forms/FormularioHeader';



const Header = ({contenido}) => {
    return (
        <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${contenido.url})`}}>
            <NavHeader />
            {/* <Header2></Header2> */}
            <div className='flex-row text-center px-20 pt-1 h-2/3'>
                <div className='flex items-center justify-center'>
                    <IconContext.Provider value={{ className: "text-7xl text-white mb-5" }}>
                        <FaGrav />
                    </IconContext.Provider>
                </div>
                <h1 className='text-5xl font-serif font-bold mb-2 text-white'>{contenido.titulo}</h1>
                <h2 className='text-xl font-serif text-white'
                >{
                    contenido.descripcion
                }</h2>
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
