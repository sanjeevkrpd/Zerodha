import React from "react";
import OpenAccount from "../OpenAccount";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        ImageUrl="media/images/kite.png"
        Heading="Kite"
        Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemoLink=""
        LearMoreLink=""
        GooglePlayLink=""
        AndroidPlayLink=""
      />
      <RightSection 
       ImageUrl="media/images/console.png"
       Heading="Console"
       Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       LearnMoreLink="" />
      <LeftSection
        ImageUrl="media/images/coin.png"
        Heading="Coin"
        Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemoLink=""
        LearMoreLink=""
        GooglePlayLink=""
        AndroidPlayLink=""
      />
      <RightSection 
       ImageUrl="media/images/kiteconnect.png"
       Heading="Kite Connect API"
       Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       LearnMoreLink="" />
       <LeftSection
        ImageUrl="media/images/varsity.png"
        Heading="Varsity mobile"
        Description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemoLink=""
        LearMoreLink=""
        GooglePlayLink=""
        AndroidPlayLink=""
        ImageSize= "70%"
        
      />

      <p className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
      <OpenAccount />
    </>
  );
};

export default ProductPage;
