import { useNavigate } from "react-router-dom";
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
import useFields from "../../hooks/useFields";

export default function SignInView() {
  const navigate = useNavigate();

  const { properties, getData, errors } = useFields([
    { name: "email", type: "string" },
    { name: "password", type: "string" },
  ]);

  const handleSignIn = async () => {
    const data = getData();
    console.log(data);
    return;

    const user = await userApi.getByEmail(data.email);

    if (user == null || user.password !== data.password) {
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
            <FormControl id="email" isInvalid={errors.email !== ""}>
              <FormLabel>Email address</FormLabel>
              <EmailInput {...properties("email")} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password !== ""}>
              <FormLabel>Password</FormLabel>
              <PasswordInput {...properties("password")} />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
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
              <Button colorScheme="gray" onClick={() => navigate("/signup")}>
                Create account
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
