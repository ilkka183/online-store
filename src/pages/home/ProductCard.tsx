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
import { Cart, CartItem } from "../../services/cartService";
import { Product } from "../../services/productService";
import useCart from "../../hooks/cart/useCart";
import useReplaceCart from "../../hooks/cart/useReplaceCart";

interface Props {
  product: Product;
  isSkeleton?: boolean;
}

export default function ProductCard({ product, isSkeleton = false }: Props) {
  const clientId = 1;

  const { cart } = useCart(clientId);
  const { replaceItem } = useReplaceCart(clientId);

  const handleAddToCart = () => {
    if (cart.items.find((item) => item.name == product.title)) {
      // Product already exists. Add quantity.
      const newCart: Cart = {
        ...cart,
        items: cart.items.map((i) =>
          i.name == product.title
            ? ({ ...i, quantity: i.quantity + 1 } as CartItem)
            : i
        ),
      };

      replaceItem(newCart.id, newCart);
    } else {
      // A new product will be added.
      const newCart: Cart = {
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
          } as CartItem,
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
