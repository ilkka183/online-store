import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import useCarts from "../../hooks/useCarts";

function CartView() {
  const { data, setData, error, isLoading } = useCarts();

  const total = data.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart{" "}
            {data.length > 0 ? "(" + data.length + "items)" : " is empty"}
          </Heading>

          <Stack spacing="6">
            {data.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onClickDelete={(id: string) =>
                  setData(data.filter((data) => data.id !== id))
                }
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <OrderSummary total={total} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={useColorModeValue("blue.500", "blue.200")}>
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}

export default CartView;
