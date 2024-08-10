import React from 'react'
import { Link } from 'react-router-dom'

function Result(props) {
  return (
    <div className='text-center'>
        <h3 >Result</h3>
        <hr/>
        <div className='d-flex justify-content-center'>
    <h3 className='mx-auto text-success'>Correct Answer <h1 className='display-1'>{props.correct}</h1> </h3>

    <h3  className='mx-auto text-danger'>Wrong Answer<h1 className='display-1'>{props.wrong}</h1></h3>
    </div>

    <Link to={'/dashboard'}>
    <button className='btn btn-dark w-50 my-3'>Retake</button>
    </Link>     
    <br/>
    <Link to='/dashboard'>
    <button className='btn btn-dark w-50'>Go To Dashboard</button>
    </Link>
    <br />
    <Link to={`/result/${props.skill}`}>
    <button className='btn btn-dark w-50 my-3'>See Answers</button>
    </Link>

    </div>
  )
}

export default Result