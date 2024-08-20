import React from 'react'

const Brokerage = () => {
  return (
    <>
    
    <div className='container mt-5 p-6'> 

        <div className='row p-5'>

          <div className='col-8 p-6'>
                  <h5 className='text-primary text-center'>Brokerage calculator</h5>

                  <ul className='text-muted p-3' style={{fontSize : "15px" , marginLeft : "10%" , lineHeight : "22px"}}>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                  </ul>
          </div>
          
          <div className='col-4'>
          <h5 className='text-primary text-center'> List of charges</h5>
         
          </div>
        </div>
    </div>
    </>
  );
}

export default Brokerage
