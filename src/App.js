import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [otp,setOpt]=useState(new Array(5).fill(''))

  const handleChange = (element, index)=>{
      if(isNaN(element.value)) return false

      setOpt([...otp.map((d,idx)=>(idx===index) ? element.value:d)])

      //focus next input

      if(element.nextSibling){
         element.nextSibling.focus()
      }
  }
  return (
    // <div className='container'>
    //   <div className='numberBlock'>
    //       <input type='number' className='opt_num'/>
    //       <input type='number' className='opt_num'/>
    //       <input type='number' className='opt_num'/>
    //       <input type='number' className='opt_num'/>
    //       <input type='number' className='opt_num'/>
    //       <input type='number' className='opt_num'/>
    //   </div>
    // </div>
    <div className='container'>
      {
        otp.map((data,index)=>{
          return(
            <input 
              className='otp-field'
              type='number'
              name='otp'
              maxLength='1'
              key={index}
              value={data}
              onChange={(e)=>handleChange(e.target, index)}
              onFocus={(e)=>e.target.select()}
            />
          )
        })
      }
      <>{otp.join('')}</>
    </div>
)}

export default App



