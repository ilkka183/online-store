import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { Product } from "../hooks/useProducts";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src={product.image} />
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {product.title}
      </Text>
      <Text mt={2}>{product.price} €</Text>
      <Text>{product.description}</Text>
    </Box>
  );
}

export default ProductCard;
