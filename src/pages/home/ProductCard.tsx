import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { Product } from "../../services/productService";
import useCarts from "../../hooks/cart/useCarts";
import useReplaceCart from "../../hooks/cart/useReplaceCart";

interface Props {
  product: Product;
  isSkeleton?: boolean;
}

export default function ProductCard({ product, isSkeleton = false }: Props) {
  const userId = 1;

  const { data } = useCarts(userId);
  const { replaceItem } = useReplaceCart(userId);

  const cart = data ? data[0] : { id: 0, items: [] };

  const handleAddToCart = () => {
    if (cart.items.find((item) => item.name == product.title)) {
      // Product already exists. Add quantity.
      const newCart = {
        ...cart,
        items: cart.items.map((i) =>
          i.name == product.title ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };

      replaceItem(newCart.id, newCart);
    } else {
      // A new product will be added.
      const newCart = {
        ...cart,
        items: [
          ...cart.items,
          {
            id: 0,
            price: product.price,
            currency: "EUR",
            name: product.title,
            quantity: 1,
            description: product.description,
            image: product.image,
          },
        ],
      };

      replaceItem(newCart.id, newCart);
    }
  };

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
        <Button onClick={handleAddToCart}>Add to cart</Button>
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
      </CardBody>
    </Card>
  );
}
