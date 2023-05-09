import { Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormHeading from "../../components/FormHeading";
import usePaymentMethods from "../../hooks/client/usePaymentMethods";
import PaymentMethodCard from "./PaymentMethodCard";

export default function PaymentMethodsPage() {
  const clientId = 1;
  const { data } = usePaymentMethods(clientId);

  const handleRemove = (id: number) => {
    console.log(id);
  };

  const handleSetAsDefault = (id: number) => {
    console.log(id);
  };

  return (
    <Box paddingX={5}>
      <FormHeading>Payment Methods</FormHeading>
      <HStack mt={4}>
        {data?.data.map((paymentMethod) => (
          <PaymentMethodCard
            key={paymentMethod.id}
            paymentMethod={paymentMethod}
            onRemove={handleRemove}
            onSetAsDefault={handleSetAsDefault}
          />
        ))}
      </HStack>
    </Box>
  );
}
