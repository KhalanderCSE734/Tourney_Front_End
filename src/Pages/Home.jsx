import React, { useEffect } from 'react'

import HeroSection from '../Components/HeroSection'


import { AppContext } from '../Contexts/AppContext/AppContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'


const Home = () => {

  const { updateTournamentStatus } = useContext(AppContext);



  useEffect(() => {
    updateTournamentStatus();
  }, []);


  return (
    <>
      <HeroSection/>
    </>
  )
}

export default Home
