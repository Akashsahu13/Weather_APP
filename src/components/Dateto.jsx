import React from 'react'
import { useState } from 'react';
import "./style.css"

const Dateto = () => {

    let a;

    let date;
    const option={ year:'numeric', month:'long', day:'numeric'};
    a= new Date()
    date=a.toLocaleDateString(undefined, option);
    
    // setTime(a.getMinutes())
    console.log(date)


  return (
    <>

    <div>
        
    </div>
    <div className='Timeda'>

<div>
</div>
    <div>
    
        </div> 
    </div>

    </>
  )
}

export default Dateto