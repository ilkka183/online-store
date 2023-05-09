import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Order } from "../../api/orderApi";
import { Link } from "react-router-dom";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  return (
    <Card>
      <CardBody>
        <Text>{order.total}</Text>
      </CardBody>
    </Card>
  );
}
