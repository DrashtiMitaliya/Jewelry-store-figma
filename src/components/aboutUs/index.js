// * react imports * //
import React from "react";

// * local imports * //
import OrderWiseBox from "@/common/OrderWiseBox";

const AboutUs = () => {
  return (
    <OrderWiseBox
      image="/assets/images/aboutUs/about-us.svg"
      imageOrder={2}
      textOrder={1}
      title="About Us"
      description="We are a group of five friends passionate about making unique and
              beautiful jewelry. Whether it`s crafting intricate beaded
                 necklaces or designing elegant bracelets, our creativity and
                 skills shine through in every piece we create. We value
                 collaboration and work together to come up with new ideas and
                 techniques that enrich our craft. From sourcing the highest
               quality materials to putting the finishing touches on each piece,
             we take pride in every step of the process. At the heart of our
               business is a genuine love for jewelry-making, and we cant wait to
               share our passion with you."
      buttonOrder={"reverse-unique"}
      buttonText="Read More"
      imageHeight={"800"}
      imageWidth={"733"}
    />
  );
};

export default AboutUs;
