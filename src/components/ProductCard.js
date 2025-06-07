import React from 'react';

const ProductCard = React.memo(({ product }) => {
  // Expensive calculation inside render the timer function
  const discountedPrice = (() => {
    const start = performance.now();
    while (performance.now() - start < 2) {} // simulate heavy calc (milliseconds)
    return product.price * (1 - product.discount);
  })();

  return (
    <div style={{ border: '1px solid gray', margin: '5px', padding: '10px' }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
    </div>
  );
});

export default ProductCard;
