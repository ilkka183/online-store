import { ReactNode } from "react";
import { MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children?: ReactNode;
}

export default function MenuItemLink({ to, children }: Props) {
  return (
    <MenuItem as={Link} to={to}>
      {children}
    </MenuItem>
  );
}
