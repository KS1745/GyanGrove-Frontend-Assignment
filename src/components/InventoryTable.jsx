import React from 'react';

const InventoryTable = ({ items, updateItem, deleteItem, setEditingItem }) => {
  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className={item.quantity < 10 ? 'low-stock' : ''}
          >
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                className="edit-button"
                onClick={() => setEditingItem(item)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
