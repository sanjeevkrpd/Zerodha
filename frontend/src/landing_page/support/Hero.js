import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid' id='supportHero'> 
      
      <div className='p-5 mt-5 mb-5' id='supportWrapper'>
        <h3>Support Portal</h3>
        <a href='' style={{color : "white"}}>Create Tickets</a>
      </div>
        <div className='row p-5 mt-5 mb-5 mx-5'>
          <div className='col-6 '>
             <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
             <input placeholder='Eg. how do i activate F&O, why is my order getting rejected ...'/>
             <br/>
             <a href='' style={{ textDecoration : "none",color : "white" , fontSize : "20px" ,borderBottom : "1px solid white"}} >  Track account opening </a>
             <a href='' style={{ textDecoration : "none",color : "white" , fontSize : "20px" , marginLeft : "8px",borderBottom : "1px solid white"}} >  Track segment activation </a>
             <a href='' style={{ textDecoration : "none",color : "white" , fontSize : "20px" , marginLeft : "8px",borderBottom : "1px solid white"}} >  Intraday margins </a> <br/>
             <a href='' style={{ textDecoration : "none",color : "white" , fontSize : "20px" ,borderBottom : "1px solid white"}} >  Kite user manual</a>
          </div>
          <div className='col-6 '>
            <h1 className='fs-3'>Featured</h1>
            <a href='' style={{ textDecoration : "none",color : "white" , fontSize : "20px" ,borderBottom : "1px solid white"}} >1. Current Buybacks - August 2024</a> <br/>
             <a href='' style={{ textDecoration : "none",color : "white" , fontSize : "20px",borderBottom : "1px solid white"}} >2. Latest Intraday leverages and Square-off timings </a>
          </div>
        </div>
    </section>
  )
}

export default Hero
