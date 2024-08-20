import React from 'react'

const Education = () => {
  return (
    <>
    <div className="container">
      <div className="row"> 
      <div className="col-6 "> 
        <img src='media/images/education.svg' style={{width: "70%"}}/>
      </div>

        <div className="col-6"> 
          <h1 className='fs-2'>Free and open market education</h1>
          <p className='text-muted mb-3'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

          <a  href='' style={{textDecoration : "none"}}>Varsity &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
    
          <p className='text-muted mb-3 mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' style={{textDecoration : "none"}}>TradingQ&A &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </>
  )
}

export default Education
