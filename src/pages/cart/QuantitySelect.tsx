import { Select, SelectProps, useColorModeValue } from "@chakra-ui/react";

export default function QuantitySelect(props: SelectProps) {
  const options: number[] = [];

  for (let i = 1; i <= 10; i++) options.push(i);

  return (
    <Select
      maxW="80px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
