import { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        ...product,
        id: prevProducts?.length
          ? prevProducts[prevProducts.length - 1]?.id + 1
          : 1,
      },
    ]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
