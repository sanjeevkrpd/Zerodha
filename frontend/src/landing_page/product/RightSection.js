import React from 'react'

const RightSection = ({ImageUrl ,Heading , Description , LearnMoreLink}) => {
  return (
    <div className='container p-5'>
      
        <div className='row mt-5 p-5'>
        <div className="col-6  mt-5 p-5"  >
            <h1 className="mb-3 mt-5 " style={{marginLeft : "20%"}}>{Heading}</h1>
            <p className="text-muted " style={{marginLeft : "20%", lineHeight  : "30px"}}>{Description}</p>
            <div>
          <a className='mb-5' href={LearnMoreLink} style={{marginLeft : "20%" ,textDecoration : "none" }}> Learn more &nbsp;<i class="fa-solid fa-arrow-right"></i> </a>
          </div>
          </div>
      <div className='col-6'>
        <img src={ImageUrl}  />
      </div>
        </div>
    </div>
  )
}

export default RightSection
