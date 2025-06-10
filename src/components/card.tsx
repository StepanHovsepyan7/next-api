import React from 'react'

export interface CardProps{
    id:number,
    title:string,
    images:string,
    price:number,
}

function Card({id,title,images,price}:CardProps) {
  return (
    <div>
        <div className='cursor-pointer border-2 p-2 rounded-3xl card'>
            <img className='h-[300px] w-[300px] object-contain' src={images} alt="" />
            <h3 className='font-bold'>{title}</h3>
            <span>Price: {price} $</span>
        </div>
    </div>
  )
}

export default Card