'use client';
import { getAllProducts } from '@/Requests/request';
import { Product } from '@/typing';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Category from './Category';

const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Menyimpan kategori yang dipilih

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const fetchedProducts: Product[] = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = selectedCategory
    ? products?.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="pt-16 pb-12">
      {/* Komponen Kategori */}
      <Category filtered={selectedCategory} setFiltered={setSelectedCategory} />

      {/* Hanya tampil jika tidak ada kategori yang dipilih */}
      {!selectedCategory && (
        <h1 className="text-center font-bold text-2xl mt-8">All Products</h1>
      )}

      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader size={32} className="animate-spin" />
        </div>
      ) : (
        <div
          className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 lg:grid-cols-4 gap-12"
        >
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
