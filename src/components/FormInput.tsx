import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  label: string;
}

export default function FormInput({ label, ...props }: Props) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
    </FormControl>
  );
}
