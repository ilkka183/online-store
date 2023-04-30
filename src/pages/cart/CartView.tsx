import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import CartElement from "./CartElement";
import OrderSummary from "./OrderSummary";
import { CartItem } from "../../services/cartService";
import useCarts from "../../hooks/cart/useCarts";
import useReplaceCart from "../../hooks/cart/useReplaceCart";

export default function CartView() {
  const userId = 1;

  const { data } = useCarts(userId);
  const { replaceItem } = useReplaceCart(userId);

  const cart = data ? data[0] : { id: 0, items: [] };

  const total =
    cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0) || 0;

  const updateQuantity = (item: CartItem, quantity: number) => {
    const newCart = {
      ...cart,
      items: cart.items.map((i) => (i === item ? { ...i, quantity } : i)),
    };

    replaceItem(newCart.id, newCart);
  };

  const deleteItem = (item: CartItem) => {
    const newCart = {
      ...cart,
      items: cart.items.filter((i) => i !== item),
    };

    replaceItem(newCart.id, newCart);
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
            {cart.items.length > 0
              ? "(" + cart.items.length + "items)"
              : " is empty"}
          </Heading>

          <Stack spacing="6">
            {cart.items.map((item) => (
              <CartElement
                key={item.id}
                item={item}
                onUpdateQuantity={(id: number, quantity: number) =>
                  updateQuantity(item, quantity)
                }
                onRemove={(id: number) => deleteItem(item)}
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
