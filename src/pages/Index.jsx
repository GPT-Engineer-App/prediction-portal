import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [prediction, setPrediction] = useState("");

  const handlePredict = () => {
    // Simple mock prediction logic
    const predictions = ["You will have a great day!", "Something unexpected will happen.", "You will meet someone new.", "A surprise is waiting for you.", "You will achieve your goals."];
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    setPrediction(randomPrediction);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Prediction Generator
        </Text>
        <Input placeholder="Enter your question..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button leftIcon={<FaMagic />} colorScheme="teal" onClick={handlePredict}>
          Get Prediction
        </Button>
        {prediction && (
          <Box p={4} mt={4} borderWidth={1} borderRadius="md" width="100%">
            <Text fontSize="xl">{prediction}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
