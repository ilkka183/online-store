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

export default function AddToCart({ product }: Props) {
  return (
    <Card>
      <CardBody>
        <Button>Add to cart</Button>
      </CardBody>
    </Card>
  );
}
