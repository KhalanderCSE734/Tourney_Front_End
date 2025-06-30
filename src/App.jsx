import React from 'react'

import './App.css';

import {Routes,Route} from 'react-router-dom';

import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import SignUpOptions from './Components/SignUpOptions';


import OrganizerHome from './Pages/Organizer/OrganizerHome';
import OrganizerTournament from './Pages/Organizer/OrganizerTournament';



import PlayerLogin from './Components/Auth/Player/PlayerLogin';
import PlayerSignUp from './Components/Auth/Player/PlayerSignUp';
import OrganizerLogin from './Components/Auth/Organizer/OrganizerLogin';
import OrganizerSignUp from './Components/Auth/Organizer/OrganizerSignUp';
import AdminLogin from './Components/Auth/Admin/AdminLogin';




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/roleSelection' element={<SignUpOptions/>}/>


        {/* Organizer Routes */}

        <Route path='/organizer/home' element={<OrganizerHome/>}/>
        <Route path='/organizer/tournaments' element={<OrganizerTournament/>}/>


        {/* Auth Routes */}

        {/* Player Routes */}
        <Route path='/login/player' element={<PlayerLogin/>}/>
        <Route path='/signup/player' element={<PlayerSignUp/>}/>

        {/* Organizer Routes */}
        <Route path='/login/organizer' element={<OrganizerLogin/>}/>
        <Route path='/signup/organizer' element={<OrganizerSignUp/>}/>

        {/* Admin Routes */}
        <Route path='/login/admin' element={<AdminLogin/>}/>
        


      </Routes>
      
    </div>
  )
}

export default App