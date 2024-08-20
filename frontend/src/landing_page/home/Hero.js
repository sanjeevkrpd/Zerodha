import React from 'react'

const Hero = () => {
  return (
    <div className='container'>

      <div className='row p-5 text-center mb-5'>
        <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
        <h1 className='mt-5'>Invest In Everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%", margin : "0 auto"}}>Sign up now </button>
      </div>
      
    </div>
  )
}

export default Hero
