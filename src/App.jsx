import React from 'react'
import Navbar from './components/Navbar'
import MainFirst from './components/MainFirst'
import MainSecond from './components/MainSecond'
import Footer from './components/Footer'
import Financials from './components/Financials'
import SocialProof from './components/SocialProof'
import ConnectStore from './components/ConnectStore'
import MainThird from './components/MainThird'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainFirst/>
      <MainSecond/>
      <MainThird/>
      <ConnectStore/>
      <SocialProof/>
      <Financials/>


      <Footer/>
    </div>
  )
}

export default App
