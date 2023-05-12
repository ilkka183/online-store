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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LinkImage from "../../components/LinkImage";

interface Props {
  item: OrderItem;
}

export default function OrderItemControl({ item }: Props) {
  const navigate = useNavigate();
  const toProductPage = "/product/" + item.productId;

  return (
    <Box mb={6}>
      <HStack>
        <LinkImage src={item.image} boxSize="80px" to={toProductPage} />
        <Box>
          <Link as={RouterLink} to={toProductPage}>
            {item.title}
          </Link>
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
