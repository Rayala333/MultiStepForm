import React, { useContext } from 'react';
import { store } from './Multistep';

const Thred = () => {
    const {data,changeHandler} = useContext(store)
  return (
    <>
    Contact:
    <input type='text' name='contact' value={data.contact} onChange={changeHandler} />
    </>
  )
}

export default Thred