import { Text, VStack } from "@chakra-ui/react";
import { Product } from "../../api/productApi";

interface Props {
  product: Product;
}

export default function Info({ product }: Props) {
  return (
    <VStack alignItems="left" m={4}>
      <Text fontSize={"2xl"} paddingBottom={3}>
        {product.title}
      </Text>
      <Text>By {product.brand.name}</Text>
      <Text>{12} reviews | 29 & 178</Text>
      <Text>{product.description}</Text>
    </VStack>
  );
}
