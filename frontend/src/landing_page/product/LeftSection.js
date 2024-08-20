import React from "react";

const LeftSection = ({
  ImageUrl,
  Heading,
  Description,
  tryDemoLink,
  LearMoreLink,
  GooglePlayLink,
  AndroidPlayLink,
  ImageSize
}) => {
  return (
    <>
      <div className="container mb-4 mt-5">

        <div className="row ">
          <div className="col-6 ">
            <img src={ImageUrl} alt="Image"  style={{width : "90%" , marginLeft : "10%"}}/>
          </div>
          <div className="col-6 p-4 " >
            <h1 className="mb-3 mt-5 " style={{marginRight : "30%" , lineHeight  : "30px" , marginLeft : "10%"}}>{Heading}</h1>
            <p className="text-muted " style={{marginRight : "30%" , lineHeight  : "30px" , marginLeft : "10%"}}>{Description}</p>
          <div style={{marginRight : "30%" , lineHeight  : "30px" , marginLeft : "10%"}}>
          <a className='mb-5' href={tryDemoLink} style={{textDecoration : "none"}}> Try demo &nbsp;<i class="fa-solid fa-arrow-right"></i> </a>
          <a className='mb-5' href={LearMoreLink} style={{textDecoration : "none" , marginLeft : "50px"}}> Learn more &nbsp;<i class="fa-solid fa-arrow-right"></i> </a>
          </div>
           <div className="mt-3" style={{marginRight : "30%" , lineHeight  : "30px" , marginLeft : "10%"}}>
            <a href={GooglePlayLink}>
            <img src="media/images/googlePlayBadge.svg" />
            </a>

            <a href={AndroidPlayLink} style={{marginLeft : "20px"}}>

            <img src="media/images/appstoreBadge.svg"  style={{ImageSize}}/>
            </a>
           </div>
           
          </div>
        </div>
      </div>
    </>
  )
};

export default LeftSection;
