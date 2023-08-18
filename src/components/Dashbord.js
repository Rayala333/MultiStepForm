import React, { useContext } from 'react';
import { store } from './Multistep';

const Dashbord = () => {
    const {data,changeHandler} = useContext(store)
    
  return (
    <>
        <div>Form submited success</div>
        <div>UserName: {data.name}</div>
    </>
  )
}

export default Dashbord