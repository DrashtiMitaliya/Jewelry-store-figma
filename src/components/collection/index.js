"use client";
import { collectionData } from "@/constants/collectionData";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

const Collection = () => {
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
                        <Button sx={{ width: "250px" }} className="unique-btn">
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
                      <Box>
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
