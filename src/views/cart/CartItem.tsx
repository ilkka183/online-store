import { CloseButton, Flex, Link } from "@chakra-ui/react";
import PriceTag from "./PriceTag";
import ProductMeta from "./ProductMeta";
import QuantitySelect from "./QuantitySelect";

interface CartItem {
  id: string;
  price: number;
  currency: string;
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
}

interface Props {
  item: CartItem;
  isGiftWrapping?: boolean;
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: () => void;
}

function CartItem({
  item,
  isGiftWrapping,
  onChangeQuantity,
  onClickDelete,
}: Props) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <ProductMeta
        name={item.name}
        description={item.description}
        image={item.imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect
          value={item.quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={item.price} currency={item.currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={item.quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={item.price} currency={item.currency} />
      </Flex>
    </Flex>
  );
}

export default CartItem;
