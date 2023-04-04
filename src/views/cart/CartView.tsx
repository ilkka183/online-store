import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import CartItem, { CartItemData } from "./CartItem";
import OrderSummary from "./OrderSummary";
import { cartData as initialCartData } from "../../data/cartData";

function CartView() {
  const [cartData, setCartData] = useState<CartItemData[]>([]);

  useEffect(() => {
    setCartData([...initialCartData]);
  }, []);

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
            {cartData.length > 0
              ? "(" + cartData.length + "items)"
              : " is empty"}
          </Heading>

          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onClickDelete={(id: string) =>
                  setCartData(cartData.filter((data) => data.id !== id))
                }
              />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <OrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}

export default CartView;
