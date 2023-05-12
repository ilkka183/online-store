import {
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
import AddToCart from "./AddToCart";

interface Props {
  product: Product;
}

export default function Cart({ product }: Props) {
  return (
    <VStack>
      <AddToCart product={product} />
    </VStack>
  );
}
