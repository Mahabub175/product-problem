import { useState } from "react";

const AddProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!formData.name || isNaN(parseFloat(formData.price))) {
        throw new Error("Please provide a valid name and price.");
      }
      addProduct({ name: formData.name, price: parseFloat(formData.price) });
      setFormData({ name: "", price: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
