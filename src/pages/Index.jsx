import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">EventManager</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Events</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        height="60vh"
        bgImage="url('https://via.placeholder.com/1920x1080')"
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading size="2xl">Discover Amazing Events</Heading>
          <Text fontSize="lg">Join us and explore events happening around you</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Flex>

      {/* Upcoming Events Section */}
      <Box as="section" py={10} px={4}>
        <Heading size="lg" textAlign="center" mb={6}>Upcoming Events</Heading>
        <Stack direction={["column", "row"]} spacing={8} justifyContent="center">
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width={["100%", "30%"]}>
            <Image src="https://via.placeholder.com/400x300" alt="Event 1" />
            <Box p={4}>
              <Heading size="md">Event 1</Heading>
              <Text mt={2}>Details about Event 1</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width={["100%", "30%"]}>
            <Image src="https://via.placeholder.com/400x300" alt="Event 2" />
            <Box p={4}>
              <Heading size="md">Event 2</Heading>
              <Text mt={2}>Details about Event 2</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width={["100%", "30%"]}>
            <Image src="https://via.placeholder.com/400x300" alt="Event 3" />
            <Box p={4}>
              <Heading size="md">Event 3</Heading>
              <Text mt={2}>Details about Event 3</Text>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={6} px={4}>
        <Flex direction={["column", "row"]} justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 EventManager. All rights reserved.</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;