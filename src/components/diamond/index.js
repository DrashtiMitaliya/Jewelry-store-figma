import { Box, Typography } from "@mui/material";
import React from "react";

const Diamond = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ead9ce",
        py: { xs: "30px", sm: "50px", xl: "105px" },
        px: { xs: "20px", sm: "40px", md: "80px", xl: "227px" },
        textAlign: "center",
      }}
    >
      <Box mb={{ xs: "20px", sm: "30px", xl: "41px" }}>
        <Typography
          fontSize={{ xs: "20px", sm: "26px", lg: "30px" }}
          fontWeight={400}
          lineHeight={"48px"}
        >
          A diamond is a woman`s best friends!
        </Typography>
      </Box>
      <Box>
        <Typography
          fontSize={{ xs: "12px", sm: "14px", lg: "16px" }}
          fontWeight={400}
          lineHeight={{ xs: "20px", sm: "23px", lg: "27px" }}
        >
          A diamond is a timeless symbol of beauty and friendship, making it the
          perfect gift for any woman. It is often said that diamonds are a
          woman`s best friend, and for good reason. Not only does a diamond
          represent unwavering loyalty and devotion, but it is also a symbol of
          luxury, glamor and class. A diamond tells the world that you are proud
          of your loved one, and want them to have only the best. As Coco Chanel
          once said, "A diamond is eternity, it is real and it is unbreakable".
        </Typography>
      </Box>
    </Box>
  );
};

export default Diamond;
