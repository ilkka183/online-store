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
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import userApi from "../../services/userService";

export default function CreateAccountView() {
  const navigate = useNavigate();

  const [sign, setSign] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSignUp = async () => {
    console.log(sign);

    if (sign.password1 !== sign.password2) {
      setErrors({ ...errors, password: "Passwords are not identicals" });
      return;
    }

    const user = await userApi.getByEmail(sign.email);

    if (user != null) {
      setErrors({ ...errors, email: "Email already exists" });
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
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={sign.firstName}
                    onChange={(event) =>
                      setSign({ ...sign, firstName: event.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={sign.lastName}
                    onChange={(event) =>
                      setSign({ ...sign, lastName: event.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired isInvalid={errors.email !== ""}>
              <FormLabel>Email address</FormLabel>
              <EmailInput
                value={sign.email}
                onChange={(event) =>
                  setSign({ ...sign, email: event.target.value })
                }
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password1"
              isRequired
              isInvalid={errors.password !== ""}
            >
              <FormLabel>Password</FormLabel>
              <PasswordInput
                value={sign.password1}
                onChange={(event) =>
                  setSign({ ...sign, password1: event.target.value })
                }
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password2"
              isRequired
              isInvalid={errors.password !== ""}
            >
              <FormLabel>Password again</FormLabel>
              <PasswordInput
                value={sign.password2}
                onChange={(event) =>
                  setSign({ ...sign, password2: event.target.value })
                }
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
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
