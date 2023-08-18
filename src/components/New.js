import React, { useEffect, useState } from 'react'
import axios from 'axios'

// http://localhost:8080/fields

const New = () => {
    const[state,setState]=useState()
    

    const getData =  async()=>{
        const mydata = await axios.get('http://localhost:8080/fields')

        console.log(mydata.data)
    }
    useEffect(()=>{
      
      return(()=>{getData()})
        
    },[])
  return (
    <div>New</div>
  )
}

export default New