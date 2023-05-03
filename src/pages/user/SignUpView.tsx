import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormErrorMessage,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Link,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";
import userApi from "../../services/userService";
import useFields from "../../hooks/useFields";

export default function CreateAccountView() {
  const navigate = useNavigate();

  const { properties, getData, errors } = useFields([
    { name: "firstName", type: "string", required: true },
    { name: "lastName", type: "string", required: true },
    { name: "email", type: "string", required: true, minLength: 5 },
    { name: "password1", type: "string", required: true, minLength: 5 },
    { name: "password2", type: "string", required: true, minLength: 5 },
  ]);

  const handleSignUp = async () => {
    const data = getData();
    console.log(data);

    const user = await userApi.getByEmail(data.email);

    if (user != null) {
      //      setError({ ...error, email: "Email already exists" });
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
                  isInvalid={errors.firstName !== ""}
                >
                  <FormLabel>First Name</FormLabel>
                  <TextInput {...properties("firstName")} />
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  id="lastName"
                  isRequired
                  isInvalid={errors.lastName !== ""}
                >
                  <FormLabel>Last Name</FormLabel>
                  <TextInput {...properties("lastName")} />
                  <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired isInvalid={errors.email !== ""}>
              <FormLabel>Email address</FormLabel>
              <EmailInput {...properties("email")} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password1"
              isRequired
              isInvalid={errors.password1 !== ""}
            >
              <FormLabel>Password</FormLabel>
              <PasswordInput {...properties("password1")} />
              <FormErrorMessage>{errors.password1}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password2"
              isRequired
              isInvalid={errors.password2 !== ""}
            >
              <FormLabel>Password again</FormLabel>
              <PasswordInput {...properties("password2")} />
              <FormErrorMessage>{errors.password2}</FormErrorMessage>
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
