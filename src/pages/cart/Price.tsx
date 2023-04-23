import { ReactNode } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
  isOnSale?: boolean;
}

export default function Price({ isOnSale, children }: Props) {
  const defaultColor = useColorModeValue("gray.700", "gray.400");
  const onSaleColor = useColorModeValue("gray.400", "gray.700");
  const color = isOnSale ? onSaleColor : defaultColor;

  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? "line-through" : "none"}
    >
      {children}
    </Text>
  );
}
