import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductList from '../components/ProductList';

export const loader = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return { data: data.products };
};

export default function ProductPage() {
  const { data } = useLoaderData();
  const [products, setProducts] = useState(data);

  return <ProductList products={products} />;
}
