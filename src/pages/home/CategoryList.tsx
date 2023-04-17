import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import categoryService from "../../services/categoryService";

interface Props {
  selectedCategoryId?: number;
  onSelectCategory: (categoryId: number) => void;
}

function CategoryList({ selectedCategoryId, onSelectCategory }: Props) {
  const { data, error, isLoading } = categoryService.use();

  if (error) return null;

  if (isLoading) return <Spinner />;

  const categories = [{ id: 0, name: "" }, ...data];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              <Button
                fontSize="lg"
                fontWeight={
                  category.id === selectedCategoryId ? "bold" : "normal"
                }
                textAlign="left"
                variant="link"
                whiteSpace="normal"
                onClick={() => onSelectCategory(category.id)}
              >
                {category.id ? category.name : "All products"}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CategoryList;
