import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { PaymentMethod } from "../../api/paymentMethodApi";
import { Link } from "react-router-dom";

interface Props {
  paymentMethod: PaymentMethod;
  onRemove: (id: number) => void;
  onSetAsDefault: (id: number) => void;
}

export default function PaymentMethodCard({
  paymentMethod,
  onRemove,
  onSetAsDefault,
}: Props) {
  return (
    <Card borderWidth={paymentMethod.isDefault ? 1 : 0} minWidth="300px">
      <CardBody>
        <Flex>
          <Text fontWeight="bold">{paymentMethod.cardNumber}</Text>
          <Spacer />
          {paymentMethod.isDefault && (
            <Text color="green" fontWeight="bold">
              Default
            </Text>
          )}
        </Flex>
        <Text>{paymentMethod.expirationMonth}</Text>
        <Text>{paymentMethod.expirationYear}</Text>
        <HStack mt={2}>
          <Button
            as={Link}
            to={"/account/payment-method/edit/" + paymentMethod.id}
          >
            Edit
          </Button>
          <Button ml={2} onClick={() => onRemove(paymentMethod.id)}>
            Remove
          </Button>
          {!paymentMethod.isDefault && (
            <Button ml={2} onClick={() => onSetAsDefault(paymentMethod.id)}>
              Set as default
            </Button>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
}
