"use client";
import Main from "@/components/main";
import { Box } from "@mui/material";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Box>
      <Main />
    </Box>
  );
}
