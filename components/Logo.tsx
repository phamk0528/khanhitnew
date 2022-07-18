import React from "react";
import { Box, Image } from "@chakra-ui/react";

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Image
        src={'https://quocbcx-1c878.kxcdn.com/assets/1/content/Logo-image-desktop-HUP.png?width=250&quality=80'}
        objectFit="contain"
        width={{ base: "80%", lg: "70%" }}
        height="100%"
        alt='logo'
      />
    </Box>
  );
};

export default Logo;
