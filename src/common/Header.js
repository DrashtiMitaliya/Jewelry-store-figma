"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

const pages = ["Home", "About Us", "Collection", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#ead9ce",
        borderBottom: "1px solid #cebeb9",
        py: { xs: 0, lg: "22px" },
      }}
      position="static"
    >
      <Container
        className="container"
        sx={{
          paddingInline: {
            xs: "10px",
            sm: "50px !important",
            md: "80px !important",
            xl: "0px !important",
          },
        }}
      >
        <Toolbar sx={{ alignItems: { xs: "center" } }} disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Typography
                pr={{ xs: "10px", md: "20px", lg: "40px" }}
                key={page}
                variant="h3"
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: "15px",
                  lineHeight: "19px",
                  fontWeight: "400",
                  color: "#000000",
                  display: "block",
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Typography
            noWrap
            component={motion.div}
            whileHover={{
              scale: 1.2,
              transition: { duration: 2 },
            }}
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 400,
              lineHeight: "63px",
              flexGrow: 1,
              color: "#000000",
              textDecoration: "none",
              fontSize: { xs: "18px", sm: "30px", md: "40px" },
              fontFamily: "Bastiken !important",
              cursor: "pointer",
            }}
          >
            JEWELS
          </Typography>

          <Box
            sx={{
              flexGrow: { xs: 0, md: 1 },
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              sx={{
                paddingLeft: "0px",
                paddingTop: "4px",
                paddingRight: "5px",
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000000"
            >
              <MenuIcon color="#000000" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiList-root": {
                  backgroundColor: "#ead9ce !important",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    "&.MuiButtonBase-root": {
                      paddingBlock: "0",
                    },
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      lineHeight: "19px",
                      fontWeight: 400,
                      paddingBlock: "0",
                    }}
                    variant="h6"
                    fontFamily={"Lora"}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            noWrap
            component={motion.div}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.8 }}
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontSize: { xs: "20px", sm: "30px", md: "40px" },
              fontWeight: 400,
              lineHeight: "63px",
              color: "#000000",
              textDecoration: "none",
              fontFamily: "Bastiken !important",
              cursor: "pointer",
            }}
          >
            JEWELS
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: "flex" } }}>
            <Box
              sx={{
                paddingInline: { xs: "8px", sm: "17px" },
                borderRight: "1px solid #B2A4A482",
              }}
            >
              <SearchIcon
                sx={{ color: "#000000", fontSize: { xs: "18px", sm: "21px" } }}
              />
            </Box>
            <Box
              sx={{
                paddingInline: { xs: "8px", sm: "17px" },
                borderRight: "1px solid #B2A4A482",
              }}
            >
              <ShoppingCartIcon
                sx={{ color: "#000000", fontSize: { xs: "18px", sm: "21px" } }}
              />
            </Box>
            <Box
              sx={{
                paddingInline: { xs: "8px", sm: "17px" },
                borderRight: "1px solid #B2A4A482",
              }}
            >
              <PersonIcon
                sx={{ color: "#000000", fontSize: { xs: "18px", sm: "21px" } }}
              />
            </Box>

            <Box
              component={motion.div}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <Typography
                sx={{
                  paddingLeft: { xs: "8px", sm: "17px" },
                  fontWeight: "400",
                  fontSize: { xs: "12px", sm: "15px" },
                  lineHeight: "19px",
                  fontFamily: "Lora",
                  color: "#000000",
                  cursor: "pointer",
                }}
              >
                Sign up
              </Typography>{" "}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
