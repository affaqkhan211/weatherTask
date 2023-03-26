import React, {useState, useEffect} from 'react';
import  {UseWeatherAppContext} from '../../context/Context';

import SingleCardComponent from '../SingleCard';
const WeekInfoComponent = ()=>{
    let {state:{daily}, dispatch} = UseWeatherAppContext();
    const [selectedCard, setSelectedCard] = useState(0);
    const updateCurrent = ()=>{
        return (
            dispatch({
                type:'SET_CURRENT',
                payload:daily[selectedCard]
            })
        )
    }
   useEffect(() => {
        updateCurrent();
      }, [daily, selectedCard]);
    return (
        <>
            <div className='cardWrap'>
                <ul className='cardList'>
                    {
                       daily && daily.length > 0 ? daily.map((item, index)=>{
                        if (index < 7){
                            return (
                                    <SingleCardComponent className={index === selectedCard ? "active" : ""} onClick={()=>{
                                        setSelectedCard(index)
                                        updateCurrent();
                                    }} item={item} key={index} />
                                )
                        }
                        return '';
                            
                        }) : ''
                    }
                </ul>
            </div>
        </>
    )
}

export default WeekInfoComponent;