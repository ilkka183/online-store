import {
  Button,
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { OrderItem } from "../../api/orderApi";
import { useNavigate } from "react-router-dom";
import RouterImage from "../../components/RouterImage";
import RouterLink from "../../components/RouterLink";

interface Props {
  item: OrderItem;
}

export default function OrderItemControl({ item }: Props) {
  const navigate = useNavigate();
  const toProductPage = "/product/" + item.productId;

  return (
    <Box mb={6}>
      <HStack>
        <RouterImage src={item.image} boxSize="80px" to={toProductPage} />
        <Box>
          <RouterLink to={toProductPage}>{item.title}</RouterLink>
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
