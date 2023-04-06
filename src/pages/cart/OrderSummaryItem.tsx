import { ReactNode } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  label: string;
  value?: string;
  children?: ReactNode;
}

function OrderSummaryItem({ label, value, children }: Props) {
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text
        fontWeight="medium"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
}

export default OrderSummaryItem;
