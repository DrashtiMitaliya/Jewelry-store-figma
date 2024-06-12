import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkStyled from "./LinkStyled";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#ead9ce" }}>
      <Container sx={{ p: "0 !important" }} className="container">
        <Grid container columnSpacing={"139px"}>
          <Grid item xs={12} md={12} lg={4}>
            <Box
              pt={{ xs: "30px", sm: "40px", xl: "57px" }}
              pb={{ xs: "20px", sm: "30px", xl: "37px" }}
              textAlign={{ xs: "center", lg: "left" }}
              paddingInline={{ xs: " 20px", sm: "0px" }}
            >
              <Typography
                mb={1}
                lineHeight={"30px"}
                fontSize={"18px"}
                fontWeight={300}
                color={"#1B1B1B"}
              >
                Join Our Email list
              </Typography>
              <Typography
                mb={5}
                lineHeight={"21px"}
                fontSize={"14px"}
                fontWeight={300}
                color={"#6A6A6A"}
                maxWidth={{ xs: "100%", lg: "325px" }}
                width={"100%"}
                letterSpacing={"0.01em"}
              >
                Subscribing to Jewels allows you to stay updated on the latest
                trends and designs in the jewelry industry.
              </Typography>

              <Box
                maxWidth={"340px"}
                width={"100%"}
                marginInline={"auto"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TextField
                  placeholder="Email"
                  fullWidth
                  sx={{
                    my: "10px",
                    "& .MuiInputBase-root": {
                      border: "none",
                      backgroundColor: "white",
                      color: "#696969 !important",
                      borderRadius: "20px",
                      height: "41px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      padding: "0",
                      paddingLeft: "10px",
                      border: "none !important",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    },
                  }}
                />
                <Button
                  sx={{
                    width: "94px",
                    height: "41px",
                    ml: "-30px",
                    textTransform: "capitalize",
                    backgroundColor: "#b4815e",
                    borderRadius: "20px",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#b4815e",
                    },
                  }}
                >
                  <Typography
                    lineHeight={"27px"}
                    fontSize={"16px"}
                    fontWeight={300}
                    fontFamily={"Martel"}
                  >
                    Send
                  </Typography>
                </Button>
              </Box>

              <Box
                justifyContent={{ xs: "center", lg: "flex-start" }}
                mt={{ xs: "20px", lg: 16 }}
                display={"flex"}
                gap={{ xs: "10px", sm: "28px" }}
              >
                <Box
                  border={"1px solid #b4815e"}
                  borderRadius={"50%"}
                  padding={{ xs: "7px ", md: "14px" }}
                  display={"inline-flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  cursor={"pointer"}
                >
                  <Image
                    src="/assets/images/footer/instagram.svg"
                    alt="instagram"
                    width={21}
                    height={21}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
                <Box
                  border={"1px solid #b4815e"}
                  borderRadius={"50%"}
                  padding={{ xs: "7px ", md: "14px" }}
                  display={"inline-flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  cursor={"pointer"}
                >
                  <Image
                    src="/assets/images/footer/pinterest.svg"
                    alt="instagram"
                    width={21}
                    height={21}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
                <Box
                  border={"1px solid #b4815e"}
                  borderRadius={"50%"}
                  padding={{ xs: "7px ", md: "14px" }}
                  display={"inline-flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src="/assets/images/footer/facebook.svg"
                    alt="instagram"
                    width={21}
                    height={21}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
            mt={{ xs: "20px", sm: "40px", xl: "62px" }}
          >
            <Grid
              container
              sx={{ p: "0 !important" }}
              columnSpacing={"91px"}
              display={"flex"}
              textAlign={{ xs: "center", sm: "left" }}
              gap={{ xs: "10px", sm: "40px", md: 0 }}
            >
              <Grid
                textAlign={{ xs: "center", lg: "left" }}
                item
                xs={12}
                md={4}
              >
                <Box
                  gap={{ xs: "2px", sm: "7px" }}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    color={"#B07B54"}
                    fontSize={"18px"}
                    lineHeight={"31px"}
                    fontWeight={700}
                  >
                    Shop
                  </Typography>

                  <LinkStyled text={"Collections"} />
                  <LinkStyled text={"Rings"} />
                  <LinkStyled text={"Bracelet"} />
                  <LinkStyled text={"Chains"} />
                  <LinkStyled text={"Wedding Rings"} />
                </Box>
              </Grid>
              <Grid
                textAlign={{ xs: "center", lg: "left" }}
                item
                xs={12}
                md={4}
              >
                <Box
                  gap={{ xs: "2px", sm: "7px" }}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    color={"#B07B54"}
                    fontSize={"18px"}
                    lineHeight={"31px"}
                    fontWeight={700}
                  >
                    About
                  </Typography>

                  <LinkStyled text={"About Us"} />

                  <LinkStyled text={"Contact"} />

                  <LinkStyled text={"Privacy Policy"} />
                  <LinkStyled text={"FAQ's"} />
                </Box>
              </Grid>
              <Grid
                textAlign={{ xs: "center", lg: "left" }}
                item
                xs={12}
                md={4}
              >
                <Box
                  gap={{ xs: "2px", sm: "7px" }}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    color={"#B07B54"}
                    fontSize={"18px"}
                    lineHeight={"31px"}
                    fontWeight={700}
                  >
                    Our Contacts
                  </Typography>

                  <Typography
                    style={{
                      color: "#1B1B1B",
                      fontSize: "15px",
                      lineHeight: "25px",
                      fontWeight: 300,
                    }}
                  >
                    shop_Jewels@gmail.com
                  </Typography>

                  <Typography
                    style={{
                      color: "#1B1B1B",
                      fontSize: "15px",
                      lineHeight: "25px",
                      fontWeight: 300,
                    }}
                  >
                    +123456789
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ color: "#b2a4a4", my: { xs: "10px", lg: "0px" } }} />

      <Box textAlign={"center"} pb={"7px"}>
        <Typography
          fontSize={"15px"}
          fontWeight={400}
          lineHeight={"25px"}
          color={"#1B1B1B"}
        >
          2023 ©JEWELS. All Rights Reserved.
        </Typography>
        <Typography
          fontSize={"13px"}
          fontWeight={400}
          lineHeight={"20px"}
          color={"#1B1B1B"}
        >
          Created by Julianna
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
