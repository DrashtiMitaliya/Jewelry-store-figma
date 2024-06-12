// * react imports * //
import React from "react";

// * mui imports * //
import { Box } from "@mui/material";

// * local imports * //
import Header from "@/common/Header";
import Footer from "@/common/Footer";

import Hero from "../hero";
import Collection from "../collection";
import Diamond from "../diamond";
import BestSellers from "../sellers";
import AboutUs from "../aboutUs";
import SignatureEarrings from "../earrings";
import Trending from "../trending";
import FollowUs from "../followUs";

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
