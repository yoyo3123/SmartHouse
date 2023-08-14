import React from 'react'
import { useContext } from 'react'
import Alldata from '../ContextApi'
import { useState } from 'react'
import Addproduct from './Addproduct'
import Product from './Product'

export default function Personalroom() {
    
    const {currentroom} =useContext(Alldata)
    const {rooms} = useContext(Alldata)
    const currentRoom = rooms[currentroom]


    const [page,setPage]=useState(0)
    const pagechange=()=>{
        if (page === 0 ) {
            setPage(1)
        }else{
            setPage(0)
        }
    }
    const change=()=>{
        if (page === 1) {
            
            return <Addproduct currentRoom={currentRoom} setPage={setPage}/>
        
        }
    }

  return (
    <div>
        <div style={{display:'inline-flex',flexDirection: 'column',alignItems: 'center'}}>
            {currentRoom.products.map((val,ind)=>{
                return <Product val={val} key={ind} index={ind} products={currentRoom.products}/>
            })}
        </div>
        <div style={{display:'inline-flex',flexDirection: 'column',alignItems: 'center'}}>
            <h2 className='h2'>room name: {currentRoom.name}</h2>
            <br />
            <h2 className='h2'>room type: {currentRoom.room}</h2>
            <br />
            <button className='btn' onClick={()=>{pagechange()}}>add product</button>
            {change()}
        </div>
    </div>
  )
}
