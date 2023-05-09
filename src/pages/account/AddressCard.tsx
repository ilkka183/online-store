import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Address } from "../../api/addressApi";
import { Link } from "react-router-dom";

interface Props {
  address: Address;
  onRemove: (id: number) => void;
  onSetAsDefault: (id: number) => void;
}

export default function AddressCard({
  address,
  onRemove,
  onSetAsDefault,
}: Props) {
  return (
    <Card borderWidth={address.isDefault ? 1 : 0} minWidth="300px">
      <CardBody>
        <Flex>
          <Text fontWeight="bold">{address.fullName}</Text>
          <Spacer />
          {address.isDefault && (
            <Text color="green" fontWeight="bold">
              Default
            </Text>
          )}
        </Flex>
        <Text>{address.addressLine1}</Text>
        <Text>{address.addressLine2}</Text>
        <Text>{address.postalCode}</Text>
        <Text>{address.city}</Text>
        <Text>{address.country}</Text>
        <Text>{address.phoneNumber}</Text>
        <HStack mt={2}>
          <Button as={Link} to={"/account/address-book/edit/" + address.id}>
            Edit
          </Button>
          <Button ml={2} onClick={() => onRemove(address.id)}>
            Remove
          </Button>
          {!address.isDefault && (
            <Button ml={2} onClick={() => onSetAsDefault(address.id)}>
              Set as default
            </Button>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
}
