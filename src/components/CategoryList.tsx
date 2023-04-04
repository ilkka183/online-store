import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

function CategoryList({ selectedCategory, onSelectCategory }: Props) {
  const { data, error, isLoading } = useCategories();

  if (error) return null;

  if (isLoading) return <Spinner />;

  const categories = ["", ...data];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category} paddingY="5px">
            <HStack>
              <Button
                fontSize="lg"
                fontWeight={category === selectedCategory ? "bold" : "normal"}
                textAlign="left"
                variant="link"
                whiteSpace="normal"
                onClick={() => onSelectCategory(category)}
              >
                {category ? category : "All products"}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CategoryList;
