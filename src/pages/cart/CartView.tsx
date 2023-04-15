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
import cartService from "../../services/cartService";

function CartView() {
  const { data, setData, error, isLoading } = cartService.useAll();

  const total = data.reduce((sum, item) => sum + item.price, 0);

  const deleteItem = (id: number) => {
    const originalData = [...data];

    setData(data.filter((data) => data.id !== id));

    cartService.delete(id).catch((err) => setData(originalData));
  };

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
                onClickDelete={(id: number) => deleteItem(id)}
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
