import React from 'react'
import { useEffect } from 'react'


export default function Product(props) {
    const onoff=() =>{
        if (props.products[props.index].status == 'off') {
            props.products[props.index].status = 'on'
        }else{
            props.products[props.index].status = 'off'
        }
    }
    useEffect(()=>{
        if (props.products[props.index].status == 'off') {
                let div = document.getElementById(props.index)
                div.style.backgroundColor = 'red'
            }else{
                let div = document.getElementById(props.index)
                div.style.backgroundColor = 'green'
            }
    })
    const changeColor =() =>{
        if (props.products[props.index].status == 'off') {
            let div = document.getElementById(props.index)
            div.style.backgroundColor = 'red'
        }else{
            let div = document.getElementById(props.index)
            div.style.backgroundColor = 'green'
        }
            
    

        
        
    }
    

   
  return (

     
        <div className='productbtn' id={props.index} onClick={()=>{onoff();changeColor()}} >
            <h1>{props.products[props.index].product}</h1>


        
        </div>
  )
  
}
