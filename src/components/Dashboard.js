import React, { useState, useCallback } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import SortControls from './SortControls';
import productsData from '../data/products';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // ✅ useCallback to avoid unnecessary function recreations
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSort = useCallback((criteria) => {
    setSortBy(criteria);
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <SortControls onSort={handleSort} />
      <ProductList
        products={productsData}
        searchTerm={searchTerm}
        sortBy={sortBy}
      />
    </div>
  );
};

export default Dashboard;
