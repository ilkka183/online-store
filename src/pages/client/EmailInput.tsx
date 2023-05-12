import { Input, InputProps } from "@chakra-ui/react";

export default function EmailInput({ ...props }: InputProps) {
  return <Input type="email" {...props} />;
}
