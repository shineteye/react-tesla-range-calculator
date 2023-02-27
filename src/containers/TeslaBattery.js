import React from 'react'
import './TeslaBattery.css'
import TeslaNotice from '../components/TeslaNotice/TeslaNotice'
import TeslaCar from '../components/TeslaCar/TeslaCar'

const TeslaBattery = () => {
  return (
    <form className='tesla-battery'>
        <h1>Range Per Change</h1>
        <TeslaCar />
        <TeslaNotice />
    </form>
  )
}

export default TeslaBattery