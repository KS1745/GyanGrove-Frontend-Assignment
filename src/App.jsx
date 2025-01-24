import React, { useState } from 'react';
import InventoryTable from './components/InventoryTable';
import AddItemForm from './components/AddItemForm';
import FilterBar from './components/FilterBar';
import EditItemModal from './components/EditItemModal';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item A', category: 'Category 1', quantity: 15 },
    { id: 2, name: 'Item B', category: 'Category 2', quantity: 8 },
    { id: 3, name: 'Item C', category: 'Category 3', quantity: 5 },
    { id: 4, name: 'Item D', category: 'Category 4', quantity: 3 },
  ]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) =>
    filter ? item.category === filter : true
  );

  const sortedItems = [...filteredItems].sort((a, b) =>
    sortOrder === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  // Extract unique categories
  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <div className="app">
      <h1>Inventory Management</h1>
      <FilterBar setFilter={setFilter} setSortOrder={setSortOrder} categories={categories} />
      <AddItemForm addItem={addItem} />
      <InventoryTable
        items={sortedItems}
        updateItem={updateItem}
        deleteItem={deleteItem}
        setEditingItem={setEditingItem}
      />
      {editingItem && (
        <EditItemModal
          item={editingItem}
          updateItem={updateItem}
          closeModal={() => setEditingItem(null)}
        />
      )}
    </div>
  );
};

export default App;
