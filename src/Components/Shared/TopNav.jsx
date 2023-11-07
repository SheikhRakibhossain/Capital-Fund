import { FaBeer } from 'react-icons/fa';

const TopNav = () => {
    return (
        <div className=" lg:flex justify-end items-center">
            <div className='flex justify-center items-center'><FaBeer /> 1</div>
            <div><FaBeer /> 2</div>
            <div><FaBeer /> 3</div>
            
        </div>
    );
};

export default TopNav;