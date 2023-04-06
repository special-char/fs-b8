/* eslint-disable react/button-has-type */
import React,{useState} from 'react'
import './try.css'

function Try() {
  
  const [value,setValue]= useState(0)
    const inc=()=>{
        setValue(x=>x+1)
    }
    
    const deec=()=>{
        setValue(x=>x-1)
    }
  return <div>
       <button onClick={inc} className='btn'>+</button> 
       <br />
       <span>{value}</span>
       <br />
       <button onClick={deec} className='btn'>-</button> 

       <input type="text" />
       
    </div>
}

export default Try