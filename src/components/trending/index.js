// * react imports * //
import React from "react";

// * mui imports * //
import { Box } from "@mui/material";

// * local imports * //
import OrderWiseBox from "@/common/OrderWiseBox";

const Trending = () => {
  return (
    <Box>
      <OrderWiseBox
        image="/assets/images/trending/trenging-bg.svg"
        imageOrder={1}
        textOrder={2}
        imageSpacing={false}
        headingTextSize="30px"
        title="Most Trending In SS ‘23"
        description="Based on current fashion trends and new emerging styles, it is expected that bold and oversized earrings will continue to be popular. Additionally, sustainable fashion, eco-friendly materials and ethical production methods are becoming more important to consumers, so earrings made from recycled or sustainable materials also gain popularity."
        buttonOrder={"unique"}
        buttonText="Shop Now"
        imageHeight={"800"}
        imageWidth={"644"}
      />
    </Box>
  );
};

export default Trending;
