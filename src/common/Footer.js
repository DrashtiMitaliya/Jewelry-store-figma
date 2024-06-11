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
              >
                Join our email list
              </Typography>
              <Typography
                mb={5}
                lineHeight={"21px"}
                fontSize={"14px"}
                fontWeight={300}
                color={"#6A6A6A"}
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
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  height: "41px",
                }}
              >
                <TextField
                  placeholder="Email"
                  fullWidth
                  sx={{
                    my: "10px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                      backgroundColor: "white",
                      color: "#000 !important",
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
                    textTransform: "capitalize",
                    backgroundColor: "#b4815e",
                    borderRadius: "20px",
                  }}
                  variant="contained"
                >
                  Send
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
                  padding={"14px"}
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
                  />
                </Box>
                <Box
                  border={"1px solid #b4815e"}
                  borderRadius={"50%"}
                  padding={"14px"}
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
                  />
                </Box>
                <Box
                  border={"1px solid #b4815e"}
                  borderRadius={"50%"}
                  padding={"14px"}
                  display={"inline-flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  cursor={"pointer"}
                >
                  <Image
                    src="/assets/images/footer/facebook.svg"
                    alt="instagram"
                    width={21}
                    height={21}
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
            mt={{ xs: "30px", sm: "40px", xl: "62px" }}
          >
            <Grid
              container
              sx={{ p: "0 !important" }}
              columnSpacing={"91px"}
              display={"flex"}
              textAlign={{ xs: "center", sm: "left" }}
              gap={{ xs: "20px", sm: "40px", md: 0 }}
            >
              <Grid
                textAlign={{ xs: "center", lg: "left" }}
                item
                xs={12}
                md={4}
              >
                <Box
                  gap={{ xs: "5px", sm: "7px" }}
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

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    Collection
                  </Link>

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    Rings
                  </Link>

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    Bracelet
                  </Link>

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    Chains
                  </Link>

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    Weddings Rings
                  </Link>
                </Box>
              </Grid>
              <Grid
                textAlign={{ xs: "center", lg: "left" }}
                item
                xs={12}
                md={4}
              >
                <Box
                  gap={{ xs: "5px", sm: "7px" }}
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

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    About Us
                  </Link>

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    Contact
                  </Link>

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#1B1B1B",
                      cursor: "pointer",
                    }}
                    href={"#"}
                  >
                    FAQ's
                  </Link>
                </Box>
              </Grid>
              <Grid
                textAlign={{ xs: "center", lg: "left" }}
                item
                xs={12}
                md={4}
              >
                <Box
                  gap={{ xs: "5px", sm: "7px" }}
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
                    }}
                  >
                    shop_Jewels@gmail.com
                  </Typography>

                  <Typography
                    style={{
                      color: "#1B1B1B",
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

      <Box textAlign={"center"} my={"7px"}>
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
