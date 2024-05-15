import React, { useEffect, useRef } from 'react'
import cards from '../assets/cards/Cards_data'

export default function TitleCards() {
    const cardRef=useRef();
    const handleWheel=(e)=>{
e.preventDefault ();
cardRef.current.scrollLeft+=e.deltaY;
    }
    useEffect(()=>{
        cardRef.current.addEventListener('wheel',handleWheel)
    },[])
    return (
    <div>
        <h2 className='font-bold mt-12 mb-8'>Popular on Netflix</h2>
        <div className='card-list'>
            {cards.map((card,index)=>(        
            <div className='relative mb-5' key={index} ref={cardRef} >
                <img className='max-w-[240px] rounded-md cursor-pointer' src={card.image}></img>
                <p className='absolute right-2 bottom-3'>{card.name}</p>
             </div>
            ))}
        </div>
    </div>
  )
}
