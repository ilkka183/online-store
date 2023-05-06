import { CloseButton, Flex, Link } from "@chakra-ui/react";
import PriceTag from "./PriceTag";
import ProductMeta from "./ProductMeta";
import QuantitySelect from "./QuantitySelect";
import { CartItem } from "../../api/cartApi";

interface Props {
  item: CartItem;
  isGiftWrapping?: boolean;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onClickGiftWrapping?: () => void;
}

export default function CartElement({
  item,
  isGiftWrapping,
  onUpdateQuantity,
  onRemove,
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
        image={item.image}
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
            onUpdateQuantity(item.id, parseInt(e.currentTarget.value));
          }}
        />
        <PriceTag price={item.price} currency={item.currency} />
        <CloseButton
          aria-label={`Delete ${item.name} from cart`}
          onClick={() => onRemove(item.id)}
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
            onUpdateQuantity(item.id, parseInt(e.currentTarget.value));
          }}
        />
        <PriceTag price={item.price} currency={item.currency} />
      </Flex>
    </Flex>
  );
}
