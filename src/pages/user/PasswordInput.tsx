import { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface Props {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function PasswordInput({ value, onChange }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <Input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
      />
      <InputRightElement h={"full"}>
        <Button
          variant={"ghost"}
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
