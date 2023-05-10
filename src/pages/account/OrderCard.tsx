import {
  Button,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  VStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Order } from "../../api/orderApi";
import { Link } from "react-router-dom";
import OrderItemControl from "./OrderItemControl";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  return (
    <Box w="100%">
      <HStack color="gray" spacing={5}>
        <Text>Order #{order.id}</Text>
        <Text>Placed on {order.date.toString()}</Text>
        <Text>Total: {order.total} €</Text>
        <Spacer />
        <Text>View Invoice</Text>
      </HStack>
      <Card mt={1} mb={4}>
        <CardBody>
          <HStack alignItems="top">
            <Box>
              {order.items.map((item) => (
                <OrderItemControl key={item.id} item={item} />
              ))}
            </Box>
            <Spacer />
            <VStack alignItems="strech">
              <Button size="lg">Order Details</Button>
              <Button size="lg">Reorder</Button>
            </VStack>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
}
