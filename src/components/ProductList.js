import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, searchTerm, sortBy }) => {
  const filtered = useMemo(() => {
    return products
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) =>
        sortBy === 'name'
          ? a.name.localeCompare(b.name)
          : a.price - b.price
      );
  }, [products, searchTerm, sortBy]); // ✅ Recalculate only if any of these change

  return (
    <div>
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
