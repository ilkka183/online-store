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
import useCarts from "../../hooks/useCarts";
import useCartDelete from "../../hooks/useCartDelete";
import useCartUpdate from "../../hooks/useCartUpdate";

export default function CartView() {
  const { data: carts } = useCarts();
  const { mutate: deleteCart } = useCartDelete();
  const { mutate: updateCart } = useCartUpdate();

  const total =
    carts?.reduce((sum, item) => sum + item.quantity * item.price, 0) || 0;

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
            {carts && carts.length > 0
              ? "(" + carts.length + "items)"
              : " is empty"}
          </Heading>

          <Stack spacing="6">
            {carts?.map((item) => (
              <CartElement
                key={item.id}
                item={item}
                onChangeQuantity={(quantity: number) =>
                  updateCart({ id: item.id, data: { quantity } })
                }
                onRemove={(id: number) => deleteCart(id)}
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
