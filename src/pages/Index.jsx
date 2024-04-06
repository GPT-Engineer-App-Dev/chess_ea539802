import React from "react";
import { Box, Grid, GridItem, Text, VStack, Center } from "@chakra-ui/react";

const Index = () => {
  // A simple representation of the initial positions of chess pieces
  const initialBoard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ];

  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Chess Game
        </Text>
        <Grid templateColumns="repeat(8, 1fr)" gap={1} w="100%" h="100%" maxWidth="650px">
          {initialBoard.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <GridItem key={`${rowIndex}-${colIndex}`} w="100%" h="80px" bg={(rowIndex + colIndex) % 2 === 0 ? "gray.300" : "gray.600"} display="flex" alignItems="center" justifyContent="center" color={(rowIndex + colIndex) % 2 === 0 ? "black" : "white"}>
                {cell}
              </GridItem>
            )),
          )}
        </Grid>
      </VStack>
    </Center>
  );
};

export default Index;
