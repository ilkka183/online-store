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

interface Props {
  product: Product;
}

export default function Images({ product }: Props) {
  return <Image src={product.image} boxSize="400px" m={4} />;
}
