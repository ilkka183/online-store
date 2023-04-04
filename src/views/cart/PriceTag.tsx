import { HStack } from "@chakra-ui/react";
import Price from "./Price";
import SalePrice from "./SalePrice";
import { formatPrice } from "../../utils/price";

interface Props {
  currency: string;
  price: number;
  salePrice?: number;
}

function PriceTag({ price, currency, salePrice }: Props) {
  return (
    <HStack spacing="1">
      <Price isOnSale={!!salePrice}>{formatPrice(price, { currency })}</Price>
      {salePrice && (
        <SalePrice>{formatPrice(salePrice, { currency })}</SalePrice>
      )}
    </HStack>
  );
}

export default PriceTag;
