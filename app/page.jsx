"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">PIZZA MENU</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <article
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.subTitle}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
