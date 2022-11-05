import React from 'react';
import Left from '../Assets/Left.png';
import { useState } from 'react';
import Logo from '../Assets/SMK Negeri 1 Bintuni Logo.png'
import { FaHome } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'
import { HiMail, HiMailOpen } from 'react-icons/hi'
import Profile from '../Assets/Profile.jpg'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const Menu = [
    { title: 'Beranda',path:'/', icon:<FaHome/> },
    { title: 'Surat Masuk',path:'/surat-masuk', icon:<HiMail/> },
    { title: 'Surat Keluar', path:'/surat-keluar',icon:<BiMailSend/> },
    { title: 'Surat Disposisi', path:'/surat-disposisi',icon:<HiMailOpen/> },
    { title: 'Pengguna', path:'/pengguna', icon:<BsFillPersonFill/> },
  ]

  const [open, setOpen] = useState(false);
  return (
    <div className='container'>
      <div className={`${open ? 'w-72' : 'w-20 pt-2 pl-3'} p-5 pt-8 duration-300 h-screen bg-dark-blue relative`}>
        <img src={Left} alt='' className={`absolute cursor-pointer -right-3 top-9 w-7 border-2  bg-white rounded-[10px] border-dark-blue ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)} />
        <div className={`flex gap-x-2 items-center ${!open && 'pl-1'}`}>
          <img src={Logo} alt="" className={`cursor-pointer duration-500 w-10 ${!open}`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>| SMKN 01 BINTUNI</h1>
        </div>
        <div className={`pt-7 rounded-full ${!open && 'pt-1 ml-1'} flex gap-x-4`}>
          <img src={Profile} alt="" className={`w-10 rounded-full`}/>
          <h1 className={`text-white pt-2 font-medium ${!open && 'hidden'}`}>Kepala Sekolah</h1>
        </div>
        <ul className={`pt-6`}>
          {Menu.map((menu, index)=>(
          <li>
            <NavLink to={menu.path} key={index} className={`text-text-blue text-l flex items-center gap-x-4 cursor-pointer p-2
             hover:bg-sky-700 rounded-lg`}>
              <div className={`text-xl ${!open && 'pl-1.5'}`}>
                {menu.icon}
              </div>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </NavLink>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
