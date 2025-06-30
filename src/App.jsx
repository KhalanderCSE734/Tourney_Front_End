import React from 'react'

import './App.css';

import {Routes,Route} from 'react-router-dom';

import HeroSection from './Components/HeroSection';
import Navigation from './Components/Navigation';
import SignUpOptions from './Components/SignUpOptions';


import OrganizerHome from './Pages/Organizer/OrganizerHome';


import PlayerLogin from './Components/Auth/Player/PlayerLogin';




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path='/roleSelection' element={<SignUpOptions/>}/>


        {/* Organizer Routes */}

        <Route path='/organizer' element={<OrganizerHome/>}/>


        {/* Auth Routes */}

        {/* Player Routes */}
        <Route path='/login/player' element={<PlayerLogin/>}/>
        {/* <Route path='' */}

      </Routes>
      
    </div>
  )
}

export default App