import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="container p-5">
      <div className="row mt-5 mb-5 p-5 border-bottom" >

      <h1 className='fs-2 text-center mt-3'>We pioneered the discount broking model in India.<br/>
      Now, we are breaking ground with our technology.</h1>

      </div>

      <div className='row  text-muted' style={{paddingLeft : "20%",paddingRight : "10%"}}>
        <div className="col-6 mt-5 ">
            
            <p >
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
            <p>
            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-6 mt-5" style={{paddingLeft : "5%",paddingRight : "0%"}}>
            <p>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href=''>Rainmatter</a>
              , our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
            </p>
            <p>
            And yet, we are always up to something new every day. Catch up on the latest updates on our <a href=''>blog</a> or see what the media is <a href=''>saying about us.</a>
            </p>
          </div>
      </div>

      <div className='row ' style={{paddingLeft : "20%"}} >
        <div className="col-12 text-center"><h1>People</h1></div>
        <div className="col-6 mt-5 text-center">
          <img src='media/images/nithinKamath.jpg' alt='Img' style={{borderRadius : "100%", width : "60%"}}/>
           <h4 className='mt-3'>Nithin Kamath</h4>
           <p className='mt-3'>Founder, CEO</p>
        </div>
        <div className="col-6 mt-5 p-2">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
          Playing basketball is his zen.
          </p>
          <p>Connect on <a href=''>Homepage</a> /<a href=''>TradingQnA </a> / <a href=''>Twitter</a></p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Hero
