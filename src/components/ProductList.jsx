import Product from './Product';

export default function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
