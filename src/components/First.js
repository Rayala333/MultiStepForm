import React, { useContext } from 'react';
import { store } from './Multistep';

const First = () => {
   const {data,changeHandler} = useContext(store)
   
  return (
    <>
    UserName:
    <input type='text' name='name' value={data.name} onChange={changeHandler}/>
    </>
  )
}

export default First