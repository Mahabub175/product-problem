import { memo } from "react";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products?.map(({ id, name, price }) => (
        <li key={id}>
          {name} - ${price}
        </li>
      ))}
    </ul>
  );
};

export default memo(ProductList);
