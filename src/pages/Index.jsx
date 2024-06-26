import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Index = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleBookTickets = (event) => {
    navigate(`/book-tickets/${event.name}`);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">EventManager</Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/create-event">Create Event</Link>
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
          {events.map((event, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width={["100%", "30%"]}>
              <Image src="https://via.placeholder.com/400x300" alt={event.name} />
              <Box p={4}>
                <Heading size="md">{event.name}</Heading>
                <Text mt={2}>{event.date}</Text>
                <Text mt={2}>{event.location}</Text>
                <Text mt={2}>{event.description}</Text>
                <Button mt={4} colorScheme="teal" onClick={() => handleBookTickets(event)}>Book Tickets</Button>
              </Box>
            </Box>
          ))}
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