import OrderWiseBox from "@/common/OrderWiseBox";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <OrderWiseBox
      image="/assets/images/hero-section-bg.svg"
      imageOrder={1}
      textOrder={2}
      imageSpacing={true}
      title="Your One-Stop Destination for Unique and Exquisite Jewelry Pieces"
      description="Here, we offer various types of jewelry, including necklaces,
          bracelets, earrings, and rings. From classic designs to modern
             styles, we have something for everyone."
      buttonOrder={"unique"}
      buttonText="Shop The Collection"
      imageHeight={"897"}
      imageWidth={"673"}
    />
    // <Box sx={{ backgroundColor: "#ead9ce" }}>
    //   <Grid container>
    //     <Grid
    //       order={{ xs: 2, md: 1 }}
    //       item
    //       xs={12}
    //       md={6}
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Box
    //         paddingLeft={{ xs: "20px", sm: "40px", md: "89px", xl: "200px" }}
    //         paddingY={{ xs: "20px", md: "0px" }}
    //         paddingRight={{
    //           xs: "20px",
    //           sm: "40px",
    //           md: "0px",
    //         }}
    //       >
    //         <Typography
    //           color="#1B1B1B"
    //           fontWeight={400}
    //           fontSize={{ xs: "20px", sm: "26px", md: "28px", lg: "45px" }}
    //           lineHeight={{
    //             xs: "25px",
    //             sm: "30px",
    //             md: "34px",
    //             lg: "50px",
    //             xl: "71px",
    //           }}
    //         >
    //           Your One-Stop Destination for Unique and Exquisite Jewelry Pieces
    //         </Typography>
    //         <Typography
    //           mt={{
    //             xs: "10px",
    //             sm: "15px",
    //             md: "20px",
    //             lg: "28px",
    //             xl: "33px",
    //           }}
    //           color="#1B1B1B"
    //           fontWeight={300}
    //           fontSize={{ xs: "12px", sm: "14px", lg: "16px" }}
    //           lineHeight={{ xs: "20px", sm: "24px", lg: "27px" }}
    //         >
    //           Here, we offer various types of jewelry, including necklaces,
    //           bracelets, earrings, and rings. From classic designs to modern
    //           styles, we have something for everyone.
    //         </Typography>

    //         <Button
    //           sx={{
    //             mt: {
    //               xs: "10px",
    //               sm: "15px",
    //               md: "20px",
    //               lg: "30px",
    //               xl: "40px",
    //             },
    //           }}
    //           className="unique-btn"
    //         >
    //           <Typography
    //             fontSize={{ xs: "12px", sm: "14px", lg: "17px" }}
    //             lineHeight={{ xs: "20px", sm: "24px", lg: "27px" }}
    //             fontWeight={400}
    //           >
    //             Shop The Collection
    //           </Typography>
    //         </Button>
    //       </Box>
    //     </Grid>
    //     <Grid
    //       order={{ xs: 1, md: 2 }}
    //       item
    //       xs={12}
    //       md={6}
    //       sx={{
    //         display: "flex",
    //         justifyContent: "end",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Box
    //         pt={{ xs: "10px", md: "38px" }}
    //         pb={{ xs: "10px", md: "54px" }}
    //         paddingLeft={{ xs: "10px", md: "0px" }}
    //       >
    //         <Image
    //           src="/assets/images/hero-section-bg.svg"
    //           alt="hero"
    //           width={897}
    //           height={673}
    //           style={{ maxWidth: "100%", height: "auto" }}
    //         />
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default Hero;
