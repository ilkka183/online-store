import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormErrorMessage,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import userApi from "../../services/userService";

export default function CreateAccountView() {
  const navigate = useNavigate();
  const { register } = useForm();

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleSignUp = async () => {
    console.log(value);

    if (value.firstName === "") {
      setError({ ...error, firstName: "First Name is required" });
      return;
    }

    if (value.lastName === "") {
      setError({ ...error, lastName: "Last Name is required" });
      return;
    }

    if (value.password1 !== value.password2) {
      setError({ ...error, password2: "Passwords are not identicals" });
      return;
    }

    const user = await userApi.getByEmail(value.email);

    if (user != null) {
      setError({ ...error, email: "Email already exists" });
      return;
    }

    navigate("/home");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Create an account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl
                  id="firstName"
                  isRequired
                  isInvalid={error.firstName !== ""}
                >
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" {...register("firstName")} />
                  <FormErrorMessage>{error.firstName}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  id="lastName"
                  isRequired
                  isInvalid={error.lastName !== ""}
                >
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" {...register("lastName")} />
                  <FormErrorMessage>{error.lastName}</FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired isInvalid={error.email !== ""}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
              <FormErrorMessage>{error.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password1"
              isRequired
              isInvalid={error.password1 !== ""}
            >
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password1")} />
              <FormErrorMessage>{error.password1}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password2"
              isRequired
              isInvalid={error.password2 !== ""}
            >
              <FormLabel>Password again</FormLabel>
              <Input type="password" {...register("password2")} />
              <FormErrorMessage>{error.password2}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                colorScheme="blue"
                onClick={handleSignUp}
              >
                Create account
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} as={RouterLink} to="/signin">
                  Sign in
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
