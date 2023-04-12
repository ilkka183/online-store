import {
  Card,
  CardBody,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { Product } from "../../hooks/useProducts";

interface Props {
  product: Product;
  isSkeleton?: boolean;
}

function ProductCard({ product, isSkeleton = false }: Props) {
  if (isSkeleton)
    return (
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    );

  return (
    <Card>
      <Image src={product.image} />
      <CardBody>
        <Heading fontSize="2xl">{product.title}</Heading>
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
