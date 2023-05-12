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
import { Cart, CartItem } from "../../api/cartApi";
import { Product } from "../../api/productApi";
import useReplaceCart from "../../hooks/cart/useReplaceCart";
import RouterImage from "../../components/RouterImage";
import RouterLink from "../../components/RouterLink";

interface Props {
  cart: Cart;
  product: Product;
  isSkeleton?: boolean;
}

export default function ProductCard({
  cart,
  product,
  isSkeleton = false,
}: Props) {
  const clientId = 1;

  const { replaceItem } = useReplaceCart(clientId);

  const toProductPage = "/product/" + product.id;

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
      <RouterImage src={product.image} to={toProductPage} />
      <CardBody>
        <RouterLink to={toProductPage}>
          <Heading fontSize="2xl">{product.title}</Heading>
        </RouterLink>
        <Button onClick={handleAddToCart}>Add to cart</Button>
        <Text>{product.price}</Text>
      </CardBody>
    </Card>
  );
}
