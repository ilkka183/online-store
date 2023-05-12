import { Image, ImageProps } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props extends ImageProps {
  to: string;
}

export default function RouterImage({ to, ...props }: Props) {
  const navigate = useNavigate();

  return <Image cursor="pointer" onClick={() => navigate(to)} {...props} />;
}
