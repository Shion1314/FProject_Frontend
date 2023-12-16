import { useState } from "react";
import { Flex, Box, Text, Button, Card, CardBody, CardFooter, CardHeader, Container, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { getMe, register } from "../api/Auth";

import { setUser } from "../store";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await register(firstName, lastName, email, password).then(getMe);

      setErrorMessage(null);

      dispatch(setUser(user));

      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main>
      <Flex bg="#FCFAFF">
        <Container w="100%" h="100vh" marginTop="10vh" maxW="md">
          <Card p="5">
            <CardHeader>
              <Heading>Register</Heading>
            </CardHeader>
            <CardBody>

              <form onSubmit={handleFormSubmit}>
                <FormLabel>
                  First Name:
                </FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(firstName) => setFirstName(firstName.target.value)}
                />

                <FormLabel>
                  Last Name:
                </FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(lastName) => setLastName(lastName.target.value)}
                />

                <FormLabel>
                  Email:
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <FormLabel>
                  Password:
                </FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Flex justifyContent="center">
                  <Button type="submit">Register</Button>
                </Flex>
              </form>
            </CardBody>
            <CardFooter>
              <Box>
                {errorMessage && <Text color="red">{errorMessage}</Text>}
                <p>
                  Already have an account? <Link to="/login">Login</Link>.
                </p>
              </Box>
            </CardFooter>
          </Card>
        </Container>
      </Flex>
    </main>
  );
};
