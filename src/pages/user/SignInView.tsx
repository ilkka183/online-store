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
import userApi, { SignInData } from "../../services/userService";
import useForm from "../../hooks/useForm";

export default function SignInView() {
  const navigate = useNavigate();

  const { properties, handleSubmit, errors } = useForm<SignInData>([
    { name: "email", required: true, minLength: 5 },
    { name: "password", required: true, minLength: 5 },
  ]);

  const onSubmit = async (data: SignInData) => {
    console.log(data);

    try {
      const user = await userApi.signIn(data);

      console.log(user);

      navigate("/home");
    } catch (error: any) {
      console.log(error.message);
    }
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
              <Button
                size="lg"
                colorScheme="blue"
                onClick={() => handleSubmit(onSubmit)}
              >
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
