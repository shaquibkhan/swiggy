import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div className='error-page'>
    <div>You landed on a Error Page!!!</div>
    <h1>{err.status}</h1>
    <h2>{err.statusText}</h2>
    <p>{err.data}</p>
    </div>
  )
}

export default Error