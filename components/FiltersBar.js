import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Filters_ACTIONS } from "@/pages";

const FilterItem = ({ filter, removeFilter }) => {
  return (
    <Flex rounded={"md"} overflow={"hidden"}>
      <Box
        bgColor={"var(--very-light-cyan)"}
        py={"5px"}
        px={"8px"}
        fontWeight={"bold"}
        color={"var(--dark-cyan)"}
        width={"fit-content"}
      >
        {filter}
      </Box>

      <Box
        bgColor={"var(--dark-cyan)"}
        display={"grid"}
        justifyContent={"center"}
        alignContent={"center"}
        px={".5rem"}
        cursor={"pointer"}
        _hover={{ backgroundColor: "blackAlpha.900" }}
        onClick={removeFilter}
      >
        <Image
          alt="close"
          src={"/images/icon-remove.svg"}
          width={15}
          height={10}
        />
      </Box>
    </Flex>
  );
};

const ClearButton = ({ removeAllFilters }) => {
  return (
    <Text
      fontWeight={"bold"}
      color={"var(--dark-cyan)"}
      fontSize={"lg"}
      cursor={"pointer"}
      _hover={{ textDecor: "underline" }}
      onClick={removeAllFilters}
    >
      Clear
    </Text>
  );
};

export default function FiltersBar({ filters, changeFilters }) {
  return (
    <Flex
      backgroundColor={"white"}
      py={"1rem"}
      px={"2rem"}
      maxWidth={{ base: "320px", lg: "none" }}
      rounded={"md"}
      gap={".5rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      minW={{ md: "100%" }}
    >
      <Flex wrap={"wrap"} gap={"1rem"}>
        {filters.map((filter, i) => (
          <FilterItem
            key={i}
            filter={filter}
            removeFilter={() => {
              changeFilters({
                type: Filters_ACTIONS.REMOVE_FILTER,
                payload: { filter: filter },
              });
            }}
          />
        ))}
      </Flex>

      <ClearButton
        removeAllFilters={() => {
          changeFilters({
            type: Filters_ACTIONS.CLEAR_FILTERS,
          });
        }}
      />
    </Flex>
  );
}
