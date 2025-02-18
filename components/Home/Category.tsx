'use client';
import { getAllCategory } from '@/Requests/request';
import React, { useEffect, useState } from 'react';

type CategoryProps = {
  filtered: string;
  setFiltered: (category: string) => void;
};

const Category = ({ filtered, setFiltered }: CategoryProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategory();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleFilteredCategory = (key: string) => {
    setFiltered(filtered === key ? '' : key); // Klik lagi untuk reset kategori
  };

  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-2xl capitalize">
        Shop By Category
      </h1>
      <div
        className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-8"
      >
        {categories.map((category) => (
          <div
            key={category}
            className={`p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all
                    duration-300 shadow-md ${
                      filtered === category ? 'bg-blue-500 text-white' : ''
                    }`}
            onClick={() => handleFilteredCategory(category)}
          >
            <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">
              {category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
