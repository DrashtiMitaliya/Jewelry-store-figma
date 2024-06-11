import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const OrderWiseBox = ({
  image,
  imageOrder,
  textOrder,
  title,
  description,
  buttonOrder,
  buttonText,
  imageHeight,
  imageWidth,
  imageSpacing,
}) => {
  return (
    <Box sx={{ backgroundColor: "#ead9ce" }}>
      <Grid container>
        {imageOrder === 2 ? (
          <>
            <Grid item md={6}>
              <Box>
                <Image
                  src={image}
                  alt={title}
                  width={imageWidth}
                  height={imageHeight}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                  },
                  mr: { md: "40", xl: "200px" },
                  pl: { xs: "20", sm: "40", md: "30px", xl: "53px" },
                  pr: { xs: "20", sm: "40", md: "30px", xl: "0" },
                  mt: { xs: "30px", sm: "50px", md: "70px", xl: "136px" },
                }}
              >
                <Typography
                  mb={{ xs: "20px", sm: "25px", md: "41px" }}
                  fontSize={{ xs: "20px", sm: "24px", md: "30px" }}
                  fontWeight={400}
                  lineHeight={"48px"}
                >
                  {title}
                </Typography>
                <Typography
                  px={{ xs: "20px", sm: "30px", md: "0" }}
                  fontSize={{ xs: "12px", sm: "14px", md: "17px" }}
                  fontWeight={300}
                  lineHeight={{ xs: "20px", sm: "24px", md: "28px" }}
                >
                  {description}
                </Typography>

                <Box
                  display={"flex"}
                  justifyContent={"end"}
                  mt={{ xs: "20px", sm: "25px", lg: "86px" }}
                  my={{ xs: "20px", sm: "25px", lg: "0" }}
                >
                  <Button
                    className={
                      buttonOrder === "unique"
                        ? "unique-btn"
                        : "reverse-unique-btn"
                    }
                    variant="contained"
                  >
                    <Typography
                      fontSize={{ xs: "12px", sm: "15px", lg: "17px" }}
                      fontWeight={400}
                      lineHeight={"28px"}
                    >
                      {buttonText}
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid
              order={{ xs: textOrder, md: 1 }}
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                paddingLeft={{
                  xs: "20px",
                  sm: "40px",
                  md: "89px",
                  xl: "200px",
                }}
                paddingY={{ xs: "20px", md: "0px" }}
                paddingRight={{
                  xs: "20px",
                  sm: "40px",
                  md: "0px",
                }}
              >
                <Typography
                  color="#1B1B1B"
                  fontWeight={400}
                  fontSize={{ xs: "20px", sm: "26px", md: "28px", lg: "45px" }}
                  lineHeight={{
                    xs: "25px",
                    sm: "30px",
                    md: "34px",
                    lg: "50px",
                    xl: "71px",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  mt={{
                    xs: "10px",
                    sm: "15px",
                    md: "20px",
                    lg: "28px",
                    xl: "33px",
                  }}
                  color="#1B1B1B"
                  fontWeight={300}
                  fontSize={{ xs: "12px", sm: "14px", lg: "16px" }}
                  lineHeight={{ xs: "20px", sm: "24px", lg: "27px" }}
                >
                  {description}
                </Typography>

                <Button
                  sx={{
                    mt: {
                      xs: "10px",
                      sm: "15px",
                      md: "20px",
                      lg: "30px",
                      xl: "40px",
                    },
                  }}
                  className={
                    buttonOrder === "unique"
                      ? "unique-btn"
                      : "reverse-unique-btn"
                  }
                >
                  <Typography
                    fontSize={{ xs: "12px", sm: "14px", lg: "17px" }}
                    lineHeight={{ xs: "20px", sm: "24px", lg: "27px" }}
                    fontWeight={400}
                  >
                    {buttonText}
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid
              order={{ xs: imageOrder, md: 2 }}
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box
                pt={imageSpacing ? { xs: "10px", md: "38px" } : "0"}
                pb={imageSpacing ? { xs: "10px", md: "54px" } : "0"}
                paddingLeft={{ xs: "10px", md: "0px" }}
              >
                <Image
                  src={image}
                  alt="hero"
                  width={imageWidth}
                  height={imageHeight}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default OrderWiseBox;
