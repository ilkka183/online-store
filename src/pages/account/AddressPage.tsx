import { Button, HStack, Stack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import FormInput from "../../components/FormInput";
import FormHeading from "../../components/FormHeading";
import RouterButton from "../../components/RouterButton";
import { Address } from "../../api/addressApi";

export default function AddressPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { properties, handleSubmit, errors } = useForm<Address>([
    { name: "fullName", required: true },
    { name: "addressLine1", required: true },
    { name: "addressLine2" },
    { name: "city", required: true },
    { name: "postalCode", required: true },
    { name: "country", required: true },
    { name: "phoneNumber", required: true },
  ]);

  const onSubmit = async (data: Address) => {
    console.log(data);
    navigate("/account/address-book");
  };

  return (
    <Stack paddingX={5}>
      <FormHeading>{id ? "Edit Address" : "Add New Address"}</FormHeading>
      <FormInput label="Full Name" {...properties("fullName")} />
      <FormInput label="Address Line 1" {...properties("addressLine1")} />
      <FormInput label="Address Line 2" {...properties("addressLine2")} />
      <FormInput label="City" {...properties("city")} />
      <FormInput label="Postal Code" {...properties("postalCode")} />
      <FormInput label="Country" {...properties("country")} />
      <FormInput label="Phone Number" {...properties("phoneNumber")} />
      <HStack>
        <Button colorScheme="blue" onClick={() => handleSubmit(onSubmit)}>
          Save
        </Button>
        <RouterButton to="/account/addressbook">Cancel</RouterButton>
      </HStack>
    </Stack>
  );
}
