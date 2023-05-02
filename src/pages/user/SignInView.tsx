import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import userApi from "../../services/userService";

export default function SignInView() {
  const navigate = useNavigate();
  const [sign, setSign] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    const user = await userApi.getByEmail(sign.email);

    if (user == null || user.password !== sign.password) {
      setError("Invalid email address or password");
      return;
    }

    navigate("/home");
  };

  const handleSignUp = () => {
    navigate("/signup");
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
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
            <FormControl id="email" isInvalid={error !== ""}>
              <FormLabel>Email address</FormLabel>
              <EmailInput
                value={sign.email}
                onChange={(event) =>
                  setSign({ ...sign, email: event.target.value })
                }
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={error !== ""}>
              <FormLabel>Password</FormLabel>
              <PasswordInput
                value={sign.password}
                onChange={(event) =>
                  setSign({ ...sign, password: event.target.value })
                }
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button size="lg" colorScheme="blue" onClick={handleSignIn}>
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  New customer?
                </Text>
                <Divider />
              </HStack>
              <Button colorScheme="gray" onClick={handleSignUp}>
                Create account
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
