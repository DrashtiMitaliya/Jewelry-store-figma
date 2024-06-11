import OrderWiseBox from "@/common/OrderWiseBox";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

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

    // <Box sx={{ backgroundColor: "#ead9ce" }}>
    //   <Grid container>
    //     <Grid item xs={12} md={6}>
    //       <Box>
    //         <Image
    //           style={{ maxWidth: "100%" }}
    //           src="/assets/images/aboutUs/about-us.svg"
    //           width={800}
    //           height={733}
    //           alt="about-us"
    //         />
    //       </Box>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Box
    //         sx={{
    //           textAlign: {
    //             xs: "center",
    //             sm: "center",
    //             md: "left",
    //           },
    //           mr: { md: "40", xl: "200px" },
    //           pl: { xs: "20", sm: "40", md: "30px", xl: "53px" },
    //           pr: { xs: "20", sm: "40", md: "30px", xl: "0" },
    //           mt: { xs: "30px", sm: "50px", md: "70px", xl: "136px" },
    //         }}
    //       >
    //         <Typography
    //           mb={{ xs: "20px", sm: "25px", md: "41px" }}
    //           fontSize={{ xs: "20px", sm: "24px", md: "30px" }}
    //           fontWeight={400}
    //           lineHeight={"48px"}
    //         >
    //           About Us
    //         </Typography>
    //         <Typography
    //           px={{ xs: "20px", sm: "30px", md: "0" }}
    //           fontSize={{ xs: "12px", sm: "14px", md: "17px" }}
    //           fontWeight={300}
    //           lineHeight={{ xs: "20px", sm: "24px", md: "28px" }}
    //         >
    //           We are a group of five friends passionate about making unique and
    //           beautiful jewelry. Whether it`s crafting intricate beaded
    //           necklaces or designing elegant bracelets, our creativity and
    //           skills shine through in every piece we create. We value
    //           collaboration and work together to come up with new ideas and
    //           techniques that enrich our craft. From sourcing the highest
    //           quality materials to putting the finishing touches on each piece,
    //           we take pride in every step of the process. At the heart of our
    //           business is a genuine love for jewelry-making, and we cant wait to
    //           share our passion with you.
    //         </Typography>

    //         <Box
    //           display={"flex"}
    //           justifyContent={"end"}
    //           mt={{ xs: "20px", sm: "25px", lg: "86px" }}
    //           my={{ xs: "20px", sm: "25px", lg: "0" }}
    //         >
    //           <Button className="reverse-unique-btn" variant="contained">
    //             <Typography
    //               fontSize={{ xs: "12px", sm: "15px", lg: "17px" }}
    //               fontWeight={400}
    //               lineHeight={"28px"}
    //             >
    //               Read More
    //             </Typography>
    //           </Button>
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default AboutUs;
