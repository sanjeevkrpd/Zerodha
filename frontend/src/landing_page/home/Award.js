import React from 'react'

const Award = () => {
  return (
    <div className='container mb-5' >

      <div className='row ' >

        <div className='col-6'>
          <img src='media/images/largestBroker.svg' />
        </div>
        <div className='col-6 p-4'>
          <h1>Largest stock broker in India</h1>
          <p>2+ million Zerodha clients contribute to over 15%  of all the retail order volumes in india daily by trading and investing in:</p>
          <div className='row mb-4' >

            <div className='col-6 p-3'>
              <ul>
                <li>
                  <p>futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6 p-3'>
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' alt='pressLogos img' style={{width : "80%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Award
