const products = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000),
  discount: Math.random(), // 0 to 1
}));

export default products;
