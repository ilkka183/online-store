import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGift } from "react-icons/fi";

interface Props {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  image: string;
}

export default function ProductMeta({
  isGiftWrapping = true,
  image,
  name,
  description,
}: Props) {
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="sm">
            {description}
          </Text>
        </Stack>
        {isGiftWrapping && (
          <HStack
            spacing="1"
            mt="3"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  );
}
