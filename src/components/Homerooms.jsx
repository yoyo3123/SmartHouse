import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Alldata from '../ContextApi'
import Room from './Room'
import '../App.css';

export default function Homerooms() {
  const {rooms} = useContext(Alldata) 
  const nav = useNavigate();
  return (
    <div>
        {rooms.map((val,index)=>{
          return <Room val={val} key={index} index={index}/>
        })}
        <div style={{textAlign:"center"}}>
          <button id='navaddroom' onClick={()=>{nav('/addroom')}} style={{margin:'40px 0 0px auto',width:'350px',height:'350px',borderRadius:'150px',fontSize:'300px',border:' 2px solid #000000'}}>+</button>
        </div>
    </div>
  )
}
