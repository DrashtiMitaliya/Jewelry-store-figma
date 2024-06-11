import Header from "@/common/Header";
import { Box } from "@mui/material";
import React from "react";
import Hero from "../hero";
import Collection from "../collection";
import Diamond from "../diamond";
import BestSellers from "../sellers";
import AboutUs from "../aboutUs";
import SignatureEarrings from "../earrings";
import Trending from "../trending";
import FollowUs from "../followUs";
import Footer from "@/common/Footer";

const Main = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Collection />
      <Diamond />
      <BestSellers />
      <AboutUs />
      <SignatureEarrings />
      <Trending />
      <FollowUs />
      <Footer />
    </Box>
  );
};

export default Main;
