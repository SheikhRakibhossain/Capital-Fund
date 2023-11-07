import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMobile} from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className=" lg:flex justify-end items-center gap-4 bg-slate-100 py-1 px-4">
            <div className='flex justify-center items-center gap-2'>< FaMobile/> +18 8777767676 </div>
            <div className='flex justify-center items-center gap-2'><FaEnvelope/> needhelp@company.com</div>
            <div className='flex justify-center items-center gap-2'> Follow <FaFacebook/> <FaLinkedin/> <FaInstagram/> </div>
            
            
        </div>
    );
};

export default TopNav;