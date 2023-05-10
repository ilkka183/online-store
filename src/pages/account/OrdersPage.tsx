import { Box, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormHeading from "../../components/FormHeading";
import useOrders from "../../hooks/client/useOrders";
import OrderCard from "./OrderCard";

export default function OrdersPage() {
  const clientId = 1;
  const { data } = useOrders(clientId);

  return (
    <Box paddingX={5}>
      <FormHeading>Orders</FormHeading>
      <VStack mt={4}>
        {data?.data.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </VStack>
    </Box>
  );
}
