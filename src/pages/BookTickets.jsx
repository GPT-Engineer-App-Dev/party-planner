import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Textarea } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const BookTickets = () => {
  const { eventName } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      eventName,
      name,
      email,
      numTickets,
      paymentInfo,
    };

    // Save the booking to localStorage (or send to a backend server)
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Redirect to home page with confirmation message
    alert("Booking successful!");
    navigate("/");
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6} textAlign="center">Book Tickets for {eventName}</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="num-tickets" isRequired>
            <FormLabel>Number of Tickets</FormLabel>
            <Input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} min={1} />
          </FormControl>
          <FormControl id="payment-info" isRequired>
            <FormLabel>Payment Information</FormLabel>
            <Textarea value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" width="full">Book Tickets</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default BookTickets;