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
        <HStack mb={2}>
          <Text>Our Price:</Text>
          <Spacer />
          <Text>{product.price}&nbsp;€</Text>
        </HStack>
        <Button minWidth={200}>Add to cart</Button>
      </CardBody>
    </Card>
  );
}
