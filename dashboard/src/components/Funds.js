import React from 'react'
import {Link} from 'react-router-dom'
const Funds = () => {
  return (
    <div className='funds'>
      <p>Instant , zero-cost funds transfer with UPI</p>
      <Link className='btn btn-green'>Add Funds</Link>
      <Link className='btn btn-blue'>Withdraw</Link>
    </div>
  )
}

export default Funds
