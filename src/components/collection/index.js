"use client";

// * react imports * //
import React from "react";

// * next imports * //
import Image from "next/image";

// * mui imports * //
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

// * third party imports * //
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";

// * local imports * //
import { collectionData } from "@/constants/collectionData";

const Collection = () => {
  // * hooks * //
  const isXs = useMediaQuery("(min-width: 0px) and (max-width: 900px)");

  return (
    <Container>
      <Box sx={{ my: { xs: "30px", sm: "50px", md: "105px" } }}>
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: "20px", sm: "25px", md: "48px" },
          }}
        >
          <Typography
            fontWeight={400}
            fontSize={{ xs: "20px", sm: "24px", md: "30px" }}
            lineHeight={"47px"}
            sx={{ color: "#1B1B1B" }}
            fontFamily={"Bastiken"}
            component={motion.p}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            New Collection
          </Typography>
        </Box>

        <Box>
          <Grid
            container
            columnSpacing={{ xs: 0, sm: 0, md: "30px", xl: "82px" }}
          >
            {isXs ? (
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
                {collectionData.map((data) => (
                  <Grid
                    width={"100%"}
                    key={data.id}
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box position="relative">
                      <Box>
                        <Image
                          src={data.image}
                          alt={data.name}
                          width={280}
                          height={280}
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "0px",
                          bottom: "16px",
                        }}
                      >
                        <Button
                          component={motion.button}
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                          }}
                          whileTap={{ scale: 0.9 }}
                          sx={{ width: "250px" }}
                          className="unique-btn"
                        >
                          <Typography>{data.name}</Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Carousel>
            ) : (
              <>
                {collectionData.map((data) => (
                  <Grid
                    width={"100%"}
                    key={data.id}
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box position="relative">
                      <Box data-aos="zoom-out">
                        <Image
                          src={data.image}
                          alt={data.name}
                          width={345}
                          height={359}
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: "16px",
                          left: {
                            md: "0px",
                          },
                        }}
                      >
                        <Button
                          sx={{ width: { md: "200px", lg: "289px" } }}
                          className="unique-btn"
                        >
                          <Typography>{data.name}</Typography>
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Collection;
