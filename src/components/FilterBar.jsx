import React from 'react';

const FilterBar = ({ setFilter, setSortOrder, categories }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setFilter(e.target.value)} defaultValue="">
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)} defaultValue="asc">
        <option value="asc">Sort by Quantity (Asc)</option>
        <option value="desc">Sort by Quantity (Desc)</option>
      </select>
    </div>
  );
};

export default FilterBar;
