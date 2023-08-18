import React, { useContext } from 'react';
import { store } from './Multistep';

const Second = () => {
    const {data,changeHandler} = useContext(store)
  return (
    <>
    Email:
    <input type='email' name='email' value={data.email} onChange={changeHandler} />
    </>
  )
}

export default Second
