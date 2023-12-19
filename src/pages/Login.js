import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

import { login } from "../api/Auth";

import { setUser } from "../store";
import {
  Flex,
  Box,
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const Login = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await login(email, password);

      dispatch(setUser(user));

      setErrorMessage(null);
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
              <Heading>Login</Heading>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleFormSubmit}>
                <FormLabel>Username:</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <FormLabel>Password:</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Flex justifyContent="center">
                  <Button type="submit">Login</Button>
                </Flex>
              </form>
            </CardBody>
            <CardFooter>
              <Box>
                {errorMessage && <Text color="red">{errorMessage}</Text>}

                <p>
                  Don't have an account? <Link to="/register">Register</Link>.
                </p>
              </Box>
            </CardFooter>
          </Card>
        </Container>
      </Flex>
    </main>
  );
};
