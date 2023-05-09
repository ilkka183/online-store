import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import { ClientAddress } from "../../api/clientAddressApi";
import { Link } from "react-router-dom";

interface Props {
  address: ClientAddress;
  onRemove: (id: number) => void;
}

export default function AddressCard({ address, onRemove }: Props) {
  return (
    <Card>
      <CardBody>
        <Text>{address.fullName}</Text>
        <Text>{address.addressLine1}</Text>
        <Text>{address.addressLine2}</Text>
        <Text>{address.postalCode}</Text>
        <Text>{address.city}</Text>
        <Text>{address.country}</Text>
        <Text>{address.phoneNumber}</Text>
        <Button as={Link} to={"/account/addressbook/edit/" + address.id}>
          Edit
        </Button>
        <Button ml={2} onClick={() => onRemove(address.id)}>
          Remove
        </Button>
      </CardBody>
    </Card>
  );
}
