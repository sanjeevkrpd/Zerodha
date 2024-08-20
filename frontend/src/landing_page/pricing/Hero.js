import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="container mt-5 mb-2 p-3">
            <div className="row text-center border-bottom ">
                <h1 >Pricing</h1>
                <p className='text-muted mb-5'>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>

            <div className='row p-5 mt-5 text-center border-bottom'>

                <div className='col-4 p-2 '>
                    <img src='media/images/pricingEquity.svg' style={{width : "80%"}}/>
                    <h2 className='fs-2'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-2'>
                <img src='media/images/intradayTrades.svg' style={{width : "80%"}}/>
                <h2 className='fs-3'>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-2'>
                <img src='media/images/pricingEquity.svg' style={{width : "80%"}}/>
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
