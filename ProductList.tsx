
'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Product[]>('http://localhost:4000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);
  
return (
  <section className="p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 dark:text-gray-200 tracking-tight leading-tight drop-shadow-md">
      SẢN PHẨM BÁN CHẠY
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-10xl mx-auto">
  {products.map(product => (
    <div key={product._id} className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl max-w-sm mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-90 object-cover rounded-t-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{product.name}</h3>
      <div className="flex justify-between items-center mb-2 text-sm">
        <span className="line-through text-gray-500">${product.originalPrice}</span>
        <span className="text-red-500 font-bold">${product.discountedPrice}</span>
        
      </div>
      <div className="flex items-center mb-4">
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>☆</span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
        Add to Cart
      </button>
    </div>
  ))}
</div>

  </section>
);
}

export default Products;
