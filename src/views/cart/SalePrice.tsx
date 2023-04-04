import { ReactNode } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
}

function SalePrice({ children }: Props) {
  return (
    <Text
      as="span"
      fontWeight="semibold"
      color={useColorModeValue("gray.800", "gray.100")}
    >
      {children}
    </Text>
  );
}

export default SalePrice;
