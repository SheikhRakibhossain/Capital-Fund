import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMobile, FaTwitter} from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className=" lg:flex justify-end items-center gap-8 bg-slate-100 py-1 px-16">
            <div className='flex justify-center items-center gap-2'>< FaMobile/> +18 8777767676 </div>
            <div className='flex justify-center items-center gap-2'><FaEnvelope/> needhelp@company.com</div>
            <div className='flex justify-center items-center gap-4'> Follow | <FaFacebook/> <FaLinkedin/> <FaInstagram/> <FaTwitter/> </div>
            
            
        </div>
    );
};

export default TopNav;