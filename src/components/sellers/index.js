"use client";

// * react imports * //
import React from "react";

// * next imports * //
import Image from "next/image";

// * mui imports * //
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

// * local imports * //
import { SellersData } from "@/constants/sellersData";
import AnimatedImage from "@/common/AnimatedImage";

// * third party imports * //
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";

const BestSellers = () => {
  const isXs = useMediaQuery("(min-width: 0px) and (max-width: 900px)");
  const arrayToMap = SellersData.filter((item) => item?.name);

  return (
    <Container className="container">
      <Box py={{ xs: "30px", sm: "40px", xl: "105px" }}>
        <Box
          sx={{
            textAlign: "center",
            pb: { xs: "20px", sm: "30px", xl: "105px" },
          }}
        >
          <Typography
            fontSize={{ xs: "20px", sm: "26px", lg: "30px" }}
            fontWeight={400}
            lineHeight={"48px"}
            fontFamily={"Bastiken"}
            component={motion.p}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Best Sellers
          </Typography>
        </Box>

        <Box>
          {isXs ? (
            <>
              <Carousel
                stopAutoPlayOnHover={true}
                autoPlay={false}
                duration={1000}
                navButtonsAlwaysVisible
                indicators={false}
              >
                {arrayToMap &&
                  arrayToMap.map((item) => (
                    <>
                      {item?.name && (
                        <Grid
                          item
                          key={item.id}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <Image
                              width={310}
                              height={300}
                              src={item.image}
                              alt={item.name}
                            />
                            <Typography
                              mt={{ xs: "10px", lg: "15px" }}
                              fontSize={{
                                xs: "12px",
                                sm: "14px",
                                lg: "18px",
                              }}
                              fontWeight={300}
                              lineHeight={{
                                xs: "20px",
                                sm: "30px",
                                lg: "31px",
                              }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              fontSize={{
                                xs: "12px",
                                sm: "14px",
                                lg: "16px",
                              }}
                              fontWeight={300}
                              lineHeight={{
                                xs: "20px",
                                sm: "23px",
                                lg: "27px",
                              }}
                            >
                              {item.price}
                            </Typography>
                          </Box>
                        </Grid>
                      )}
                    </>
                  ))}
              </Carousel>
            </>
          ) : (
            <>
              <Grid
                container
                columnSpacing={{ xs: 0, sm: "10px", md: "30px", xl: "49px" }}
                rowSpacing={{ xs: "30px", sm: "20px", xl: "72px" }}
              >
                {SellersData &&
                  SellersData.map((item) => (
                    <>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        key={item.id}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.name ? (
                          <>
                            <Box data-aos="flip-right">
                              <AnimatedImage
                                width={368}
                                height={404}
                                src={item.image}
                                alt={item.name}
                              />
                              <Typography
                                mt={"15px"}
                                fontSize={{
                                  xs: "12px",
                                  sm: "14px",
                                  lg: "18px",
                                }}
                                fontWeight={300}
                                lineHeight={{
                                  xs: "20px",
                                  sm: "30px",
                                  lg: "31px",
                                }}
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                fontSize={{
                                  xs: "12px",
                                  sm: "14px",
                                  lg: "16px",
                                }}
                                fontWeight={300}
                                lineHeight={{
                                  xs: "20px",
                                  sm: "23px",
                                  lg: "27px",
                                }}
                              >
                                {item.price}
                              </Typography>
                            </Box>
                          </>
                        ) : (
                          <Box sx={{ backgroundColor: "#ead9ce" }}></Box>
                        )}
                      </Grid>
                    </>
                  ))}
              </Grid>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default BestSellers;
