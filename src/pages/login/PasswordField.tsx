import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface Props {
  title?: string;
  id?: string;
}

function PasswordField({ title = "Password", id = "password" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = useState(false);

  const onClickReveal = () => {
    setOpen(!isOpen);

    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor="password">{title}</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id={id}
          name={id}
          ref={inputRef}
          type={isOpen ? "text" : "password"}
          required
        />
      </InputGroup>
    </FormControl>
  );
}

export default PasswordField;
