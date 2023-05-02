import { Input } from "@chakra-ui/react";

interface Props {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function EmailInput({ value, onChange }: Props) {
  return <Input type="email" value={value} onChange={onChange} />;
}
