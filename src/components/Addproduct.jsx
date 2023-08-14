import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import Alldata from '../ContextApi'

export default function Addproduct(props) {
    const {rooms} = useContext(Alldata)
    const [product,setProduct]=useState('Lamp')
    const check = ()=>{
        
        if (props.currentRoom.products.length < 5) {
            let roomtype = props.currentRoom.room
            if (product == 'Water heater') {
                if (roomtype == 'Bathtub') {
                    props.currentRoom.products.push({product:product,status:'off',index:props.currentRoom.products.length})
                }else{
                    props.setPage(0)
                    return alert('Error')
                }
            }else if (product != 'Stereo system') {
                props.currentRoom.products.push({product:product,status:'off',index:props.currentRoom.products.length})
            }else{
                let stereo = false
                props.currentRoom.products.forEach((val) => {
                    if (val.product == 'Stereo system') {
                        stereo = true
                    }
                });
                if (stereo == true) {
                    props.setPage(0)
                    return alert('Error')
                }else{
                    props.currentRoom.products.push({product:product,status:'off',index:props.currentRoom.products.length})
                }
            }
            
        }else{
            props.setPage(0)
            return alert('Error')
        }
        props.setPage(0)

    }
  return (
    <div>
        <select onChange={(e)=>{setProduct(e.target.value)}} name="product" id="pro" style={{width:'170px',height:"30px",backgroundColor:' #61dafb',borderRadius:'5px' ,border:'2px solid black'}}>
            <option value="Lamp">Lamp</option>
            <option value="Stereo system">Stereo system</option>
            <option value="Air conditioner">Air conditioner</option>
            <option value="Water heater">Water heater</option>
        </select>
        <br />
        <button onClick={()=>{check()}} style={{backgroundColor:' #61dafb',borderRadius:'5px' ,border:'2px solid black'}}>Add product</button>
    </div>
  )
}
