import React, { useContext } from 'react';
import { store } from './Multistep';

const Fourth = () => {
    const {data,changeHandler,SubmitHandler} = useContext(store)
  return (
    <>
    Password:
    <input type='text' name='password' value={data.password} onChange={changeHandler} />
    <input type='submit' value='submit' />
    </>
  )
}

export default Fourth