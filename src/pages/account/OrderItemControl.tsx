import {
  Button,
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { OrderItem } from "../../api/orderApi";
import { Link } from "react-router-dom";

interface Props {
  item: OrderItem;
}

export default function OrderItemControl({ item }: Props) {
  return (
    <Box mb={6}>
      <HStack>
        <Image src={item.image} boxSize="80px" mr={4} />
        <Box>
          <Text>{item.title}</Text>
          <Text>Qty: {item.quantity}</Text>
          <HStack mt={2}>
            <Button size="sm">Write review</Button>
            <Button size="sm">Buy again</Button>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}
