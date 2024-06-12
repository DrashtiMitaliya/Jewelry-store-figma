// * react imports * //
import React from "react";

// * local imports * //
import OrderWiseBox from "@/common/OrderWiseBox";

const Hero = () => {
  return (
    <OrderWiseBox
      image="/assets/images/hero-section-bg.svg"
      imageOrder={1}
      textOrder={2}
      imageSpacing={true}
      headingTextSize="45px"
      title="Your One-Stop Destination for Unique and Exquisite Jewelry Pieces"
      description="Here, we offer various types of jewelry, including necklaces,
          bracelets, earrings, and rings. From classic designs to modern
             styles, we have something for everyone."
      buttonOrder={"unique"}
      buttonText="Shop The Collection"
      imageHeight={"897"}
      imageWidth={"673"}
      descriptionFontFamily={"Martel"}
    />
  );
};

export default Hero;
