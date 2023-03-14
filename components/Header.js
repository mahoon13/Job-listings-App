import { Box, Image } from "@chakra-ui/react";

const HeaderImage = () => {
  return (
    <>
      <Image
        alt="hero bg"
        src="/images/bg-header-mobile.svg"
        display={{ md: "none" }}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
      />

      <Image
        alt="hero bg"
        src="/images/bg-header-desktop.svg"
        display={{ base: "none", md: "block" }}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
      />
    </>
  );
};

export default function Header() {
  return (
    <Box
      width={"full"}
      height={"200px"}
      position={"relative"}
      bgColor={"var(--dark-cyan)"}
    >
      <HeaderImage />
    </Box>
  );
}
