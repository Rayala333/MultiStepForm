import React, { useContext } from 'react';
import { store } from './Multistep';
import Button from 'react-bootstrap/Button';


const Fourth = () => {
    const {data,changeHandler,SubmitHandler} = useContext(store)
  return (
    <>
    Password:
    <input type='text' name='password' value={data.password} onChange={changeHandler} />
    <Button as='input' variant="primary" type='submit' value='submit' />
    </>
  )
}

export default Fourth