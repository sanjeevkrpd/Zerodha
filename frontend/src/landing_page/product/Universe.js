import React from 'react'

const Universe = () => {
  return ( 
    <div className='container mt-5 '>
    <div className='row text-center p-5'>
       
       <h1>The Zerodha Universe</h1>
       <p className='mb-5 '>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-4 text-muted'>
        <img src="media/images/zerodhaFundhouse.png" style={{width : "40%"}}/>
          <p className='mt-4'>Our asset management venture  <br/> 
          that is creating simple and transparent index  <br/> 
          funds to help you save for your goals.</p>
        </div>
        <div className='col-4 text-muted'> 
        <img src='media/images/sensibullLogo.svg' style={{width : "40%"}}/>
        <p className='mt-4'>Options trading platform that lets you  <br/> 
          create strategies, analyze positions, and examine  <br/>  
          data points like open interest, FII/DII, and more.</p>
        </div>
        <div className='col-4 text-muted'>
        <img src="media/images/zerodhaFundhouse.png" style={{width : "40%"}}/>
        <p className='mt-4'>Investment research platform   <br/> 
          that offers detailed insights on stocks,   <br/> 
         sectors, supply chains, and more.</p>
        </div>
    </div>
   
    <div className='row mt-2 text-center p-5 text-muted'>
      <div className='col-4'>
      <img src='media/images/streakLogo.png' style={{width : "40%"}}/>
          <p className='mt-4'> Systematic trading platform  <br/> 
          that allows you to create and backtest  <br/> 
          strategies without coding.</p>
      </div>
      
      <div className='col-4'>
      <img src='media/images/smallcaseLogo.png' style={{width : "40%"}}/>
          <p className='mt-4'>Thematic investing platform <br/> 
          that helps you invest in diversified <br/> 
          baskets of stocks on ETFs.</p>
      </div>
      <div className='col-4'>
      <img src='media/images/dittoLogo.png' style={{width : "30%"}}/>
          <p className='mt-4 '>Personalized advice on life <br/> 
          and health insurance. No spam  <br/> 
          and no mis-selling.</p>
      </div>
      
      {/* <div className='col-12 '><button className='btn btn-primary mt-5 '>Sing up now </button></div> */}
    </div>
      {/* <div className='row text-center mt-5'> </div> */}
    </div>
  )
}

export default Universe
