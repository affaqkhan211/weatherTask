import React from 'react'
import ChooseStateComponent from './ChooseState'
import HumidityComponent from './Humidity'
import LeftComponent from './Left'
import WeekInfoComponent from './WeekInfo'

const Home = () => {
  return (
    <>
        <div className="homeWrap">
            <div className="weatherSection">
            <LeftComponent/>
                <div className="rightSide">
                    <ChooseStateComponent/>
                    <WeekInfoComponent/>
                    <HumidityComponent/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home