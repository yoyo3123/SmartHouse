import React from 'react'
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Alldata from '../ContextApi'

export default function Addroom() {
    const {addRoom} = useContext(Alldata)
    const nav = useNavigate()
    const [optionChange,setOption]=useState('0')
    const [name,setName]=useState('')
    const [color,setColor]=useState('#696969')
    const nextPage = ()=>{
        if (optionChange ==='0') {
            alert('Error')
            nav('/')
        }else if (name.length < 1) {
            alert('Error')
            nav('/')
        }else{
            addRoom(optionChange,name,color)
            nav('/')
        }

    }

  return (
    <div>
        <select className='addinputs' onChange={(e)=>{setOption(e.target.value)}} name="roomtype" id="select">
            <option value="0">choose room type</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Bathtub">Bathtub</option>
            <option value="kitchen">kitchen</option>
        </select>
        <br />
        <input className='addinputs' onChange={(e)=>{setName(e.target.value)}} id='name' type="text" maxLength={5} placeholder='room name?'/>
        <br />
        <input className='addinputs' onChange={(e)=>{setColor(e.target.value)}} id='color' type="color" value={color}/>
        <br />
        <button onClick={()=>{nextPage()}} style={{margin:'20px auto',width:'200px',height:'70px',fontSize:'40px',backgroundColor:'#444444',borderRadius:'10px'}}>add</button>
    </div>
  )
}
