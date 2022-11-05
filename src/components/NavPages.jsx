import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import Homepage from './pages/Homepage'
import SuratMasuk from './pages/SuratMasuk'
import SuratKeluar from './pages/SuratKeluar'
import SuratDisposisi from './pages/SuratDisposisi'
import Pengguna from './pages/Pengguna'


const NavPages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/surat-masuk' element={<SuratMasuk/>}/>
            <Route path='/surat-keluar' element={<SuratKeluar/>}/>
            <Route path='/surat-disposisi' element={<SuratDisposisi/>}/>
            <Route path='/pengguna' element={<Pengguna/>}/>
        </Routes>
    </div>
  )
}

export default NavPages