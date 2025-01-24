import React, { useState } from 'react';

const EditItemModal = ({ item, updateItem, closeModal }) => {
  const [updatedItem, setUpdatedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item.id, updatedItem);
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={updatedItem.name}
          onChange={handleChange}
          placeholder="Item Name"
        />
        <input
          type="text"
          name="category"
          value={updatedItem.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="number"
          name="quantity"
          value={updatedItem.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <button type="submit">Save</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditItemModal;
