import useCategories from "./hooks/useCategories";
import "./App.css";

function App() {
  const { data: categories } = useCategories();

  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
