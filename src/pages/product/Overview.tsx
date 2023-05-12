import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Product } from "../../api/productApi";

interface Props {
  product: Product;
}

export default function Overview({ product }: Props) {
  return (
    <Box borderWidth={1} borderColor="gray:30" p={4}>
      <VStack alignItems="left">
        <Text>Product overview</Text>
      </VStack>
    </Box>
  );
}
