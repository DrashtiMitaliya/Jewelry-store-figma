"use client";

// * react imports * //
import React from "react";

// * next imports * //
import Image from "next/image";

// * mui imports * //
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

// * third party imports * //
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";

// * local imports * //
import { FollowOnInstaData } from "@/constants/followOnInstaData";

const FollowUs = () => {
  // * hooks * //
  const isXs = useMediaQuery("(min-width: 0px) and (max-width: 900px)");

  // * render * //
  return (
    <Container sx={{ p: "0 !important" }} className="container">
      <Box my={{ xs: "30px", sm: "40px", xl: "105px" }}>
        <Box textAlign={"center"}>
          <Typography
            variant="h2"
            fontSize={{ xs: "20px", sm: "24px", lg: "30px" }}
            fontWeight={400}
            lineHeight={"48px"}
            fontFamily={"Bastiken"}
            component={motion.p}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Follow us on Instagram
          </Typography>

          <Typography
            mt={{ xs: "3px", sm: "5px", xl: "0px" }}
            mb={{ xs: "10px", sm: "20px", xl: "71px" }}
            width={{ xs: "80%", xl: "824px" }}
            marginInline={"auto"}
            fontSize={{ xs: "12px", lg: "14px" }}
            fontWeight={300}
            lineHeight={"23px"}
          >
            @SHOPJEWELSBOUTIQUE #JEWELS
          </Typography>
        </Box>

        <Grid
          container
          columnSpacing={{ xs: 0, md: "66px" }}
          rowSpacing={{ xs: 0, md: "60px" }}
        >
          {isXs ? (
            <>
              <Carousel
                stopAutoPlayOnHover={true}
                autoPlay={false}
                duration={1000}
                navButtonsAlwaysVisible
                indicators={false}
                sx={{
                  width: "100%",
                }}
              >
                {FollowOnInstaData.map((item) => (
                  <>
                    <Grid item>
                      <Box display={"flex"} justifyContent={"center"}>
                        <Image
                          style={{ maxWidth: "100%" }}
                          src={item.image}
                          width={250}
                          height={245}
                          alt="signature-earrings"
                        />
                      </Box>
                    </Grid>
                  </>
                ))}
              </Carousel>
            </>
          ) : (
            <>
              {FollowOnInstaData.map((item) => (
                <>
                  <Grid item md={4} lg={3}>
                    <Box
                      data-aos="zoom-in"
                      component={motion.div}
                      whileHover={{
                        scale: 1.1,
                        opacity: 1.5,
                        cursor: "pointer",
                        boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.25)",
                        border: "1px solid #D9D9D9",
                      }}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <Image
                        style={{
                          maxWidth: "100%",
                        }}
                        src={item.image}
                        width={250}
                        height={245}
                        alt="follow-us-images"
                      />
                    </Box>
                  </Grid>
                </>
              ))}
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default FollowUs;
