import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  src: string;
  boxSize?: string;
  to: string;
}

export default function LinkImage({ src, boxSize, to }: Props) {
  const navigate = useNavigate();

  return (
    <Image
      src={src}
      boxSize={boxSize}
      cursor="pointer"
      onClick={() => navigate(to)}
    />
  );
}
