// import ProductCard from "../Components/ProductCard";



// export default function Wishlist() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
//       <ProductCard />
//     </main>
//   );
// }




"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import { getProductById } from '../api/products/route';
import { Product } from '@prisma/client';

export default function Wishlist() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const addToFavorites = (product: Product) => {
    if (!favorites.some((favProduct) => favProduct.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (product: Product) => {
    const updatedFavorites = favorites.filter(
      (favProduct) => favProduct.id !== product.id
    );
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    setLoading(true);
    const productId = 1; 
    getProductById(productId)
      .then((product) => {
        addToFavorites(product);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  },  [1]); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">
      <h1 className="text-2xl font-semibold mb-4">My Wishlist</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.some((favProduct) => favProduct.id === product.id)}
              onToggleFavorite={() => {
                if (favorites.some((favProduct) => favProduct.id === product.id)) {
                  removeFromFavorites(product);
                } else {
                  addToFavorites(product);
                }
              }}
            />
          ))}
        </div>
      )}
      <div className="mt-4">
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              {product.name}
              <button
                onClick={() => removeFromFavorites(product)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
