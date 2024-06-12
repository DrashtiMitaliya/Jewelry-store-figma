"use client";

// * react imports * //
import React from "react";

// * mui imports * //
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

// * next imports * //
import Image from "next/image";

// * local imports * //
import { EarringsData } from "@/constants/earringsData";

//* third party imports * //
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";

const SignatureEarrings = () => {
  const isXs = useMediaQuery("(min-width: 0px) and (max-width: 900px)");

  return (
    <Container sx={{ p: 0 }} className="container">
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
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            Signature Earrings
          </Typography>

          <Typography
            mt={{ xs: "3px", sm: "5px", xl: "10px" }}
            mb={{ xs: "10px", sm: "20px", xl: "83px" }}
            width={{ xs: "80%", xl: "824px" }}
            marginInline={"auto"}
          >
            Our unique and eye-catching earrings are exclusively made in-house.
            Each pair is carefully designed with attention to detail, resulting
            in a signature style that is both modern and timeless.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 0, md: "28px" }}>
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
                {EarringsData.map((item) => (
                  <>
                    <Grid item>
                      <Box display={"flex"} justifyContent={"center"}>
                        <Image
                          style={{ maxWidth: "100%" }}
                          src={item.image}
                          width={280}
                          height={400}
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
              {EarringsData.map((item) => (
                <>
                  <Grid item md={3}>
                    <Box
                      component={motion.div}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 1 },
                        opacity: 0.8,
                        cursor: "pointer",
                        boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <Image
                        style={{ maxWidth: "100%" }}
                        src={item.image}
                        width={280}
                        height={400}
                        alt="signature-earrings"
                      />
                    </Box>
                  </Grid>
                </>
              ))}
            </>
          )}
        </Grid>

        <Box
          display={"flex"}
          justifyContent={"end"}
          mt={{ xs: "20px", sm: "30px", xl: "47px" }}
        >
          <Button
            component={motion.button}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            className="reverse-unique-btn"
          >
            <Typography
              fontSize={{ xs: "12px", sm: "15px", lg: "17px" }}
              fontWeight={400}
              lineHeight={"28px"}
            >
              View All
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignatureEarrings;
