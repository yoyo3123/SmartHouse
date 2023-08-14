import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import Alldata from '../ContextApi';

export default function Room(props) {
    const {setCurrentroom} = useContext(Alldata)
    const nav = useNavigate()

  return (
    <div className='rooms' onClick={()=>{setCurrentroom(props.index);nav(`/room/${props.val.name}`)}} style={{backgroundColor:`${props.val.color}`,display:'inline-block',margin:'20px'}}>
        <h1>{props.val.name}</h1>
        <br />
        <h2>{props.val.room}</h2>
    </div>
  )
}
