import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function NameField() {
  return (
    <FormControl>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" required />
    </FormControl>
  );
}

export default NameField;
