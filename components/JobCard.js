import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Button,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { Filters_ACTIONS } from "@/pages";

const TagButton = ({ tag, isFiltered, addFilter }) => {
  return (
    <Box
      py={"5px"}
      px={"8px"}
      fontWeight={"bold"}
      rounded={"md"}
      color={!isFiltered ? "var(--dark-cyan)" : "white"}
      bgColor={!isFiltered ? "var(--very-light-cyan)" : "var(--dark-cyan)"}
      cursor={"pointer"}
      _hover={{ color: "white", backgroundColor: "var(--dark-cyan)" }}
      onClick={addFilter}
    >
      {tag}
    </Box>
  );
};

export default function JobCard({ detail, tags, changeFilters }) {
  function isNewJob() {
    const postedAt = detail.postedAt;
    //if posted at less than 3 days(3d) return true
    if (postedAt.split("")[1] === "d") {
      if (postedAt.split("")[0] < 3) return true;
    }
    return false;
  }

  return (
    <Card
      maxW={{ base: "320px", lg: "none" }}
      position={"relative"}
      pt={"1rem"}
      borderLeft={detail.featured && "5px solid var(--dark-cyan)"}
      display={{ lg: "flex" }}
      flexDirection={{ lg: "row" }}
      alignItems={{ lg: "center" }}
      p={{ lg: "2rem" }}
      gap={{ lg: "2rem" }}
    >
      <CardHeader
        position={{ base: "absolute", lg: "unset" }}
        top={"-25px"}
        left={"25px"}
        padding={"0px"}
      >
        <Box
          w={{ base: "50px", lg: "80px" }}
          h={{ base: "50px", lg: "80px" }}
          position={"relative"}
        >
          <Image alt={`${detail.company} logo`} src={detail.logo} fill></Image>
        </Box>
      </CardHeader>

      <CardBody
        display={"flex"}
        flexDirection={"column"}
        gap={".5rem"}
        p={{ base: "1rem", lg: "0px" }}
      >
        <Flex gap={".5rem"} alignItems={"center"}>
          <Text fontWeight={"bold"} color={"var(--dark-cyan)"}>
            {detail.company}
          </Text>

          {isNewJob() && (
            <Box
              fontWeight={"bold"}
              bgColor={"var(--dark-cyan)"}
              color={"white"}
              px={".5rem"}
              rounded={"xl"}
              fontSize={"sm"}
              pt={"4px"}
            >
              NEW!
            </Box>
          )}

          {detail.featured && (
            <Box
              fontWeight={"bold"}
              bgColor={"blackAlpha.900"}
              color={"white"}
              px={".5rem"}
              rounded={"xl"}
              fontSize={"sm"}
              pt={"4px"}
            >
              FEATURED
            </Box>
          )}
        </Flex>

        <Text
          fontWeight={"bold"}
          fontSize={"xl"}
          cursor={"pointer"}
          _hover={{ color: "var(--dark-cyan)" }}
        >
          {detail.position}
        </Text>

        <Flex gap={".7rem"} alignItems={"center"}>
          {[detail.postedAt, detail.contract, detail.location].map(
            (text, i) => (
              <Flex key={i} alignItems={"center"} gap={".7rem"}>
                <Text fontWeight={"bold"} color={"gray.400"}>
                  {text}
                </Text>
                {i !== 2 && (
                  <Box
                    width={"5px"}
                    height={"5px"}
                    bgColor={"skyblue"}
                    rounded={"full"}
                  />
                )}
              </Flex>
            )
          )}
        </Flex>
      </CardBody>

      <Divider
        width={"90%"}
        mx={"auto"}
        display={{ base: "block", lg: "none" }}
        color={"gray.400"}
      />

      <CardFooter p={{ base: "1rem", lg: "0px" }} pl={{ lg: "2rem" }}>
        <Flex gap={"1rem"} wrap={"wrap"}>
          {tags.map((tag, i) => (
            <TagButton
              key={i}
              tag={tag.tag}
              isFiltered={tag.filtered}
              addFilter={() => {
                changeFilters({
                  type: Filters_ACTIONS.ADD_FILTER,
                  payload: { filter: tag.tag },
                });
              }}
            />
          ))}
        </Flex>
      </CardFooter>
    </Card>
  );
}
