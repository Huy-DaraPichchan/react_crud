import NavBtn from './NavButton'
import { VscGraph } from 'react-icons/vsc'
import { IoSettingsOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import Logo from '../assets/img/logo.png'



const Navbar = () => {
  return (
    <div className="w-full my-4 px-2 flex flex-row items-center justify-between">
      <div className='flex items-center mr-2'>
        <div className='w-6 h-6 mr-1'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='font-bold text-2xl text-white'>
          <h1>Pomodoro</h1>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <NavBtn btnIcon={<VscGraph />} btnInfo="Report" />
        <NavBtn btnIcon={<IoSettingsOutline />} btnInfo="Setting" />
        <NavBtn btnIcon={<CgProfile />} btnInfo="Login" />
      </div>
    </div>
  );
}

export default Navbar;