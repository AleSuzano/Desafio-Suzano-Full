'use client';

import React from 'react';
import { useProducts } from '@/context/ProductContext'; // ajuste o caminho se necessário ('../context/ProductContext')
import { ProductCard } from './ProductCard';

export const ProductList: React.FC = () => {

  const { products, searchTerm, minPrice, maxPrice, sortBy } = useProducts();

 

  // Filtragem

  const filteredProducts = products.filter((product) => {

    // Filtro por Nome

    const matchesName = product.nome

      .toLowerCase()

      .includes(searchTerm.toLowerCase());

 

    // Filtro por Preço Mínimo

    const matchesMinPrice =

      minPrice === '' || product.preco >= parseFloat(minPrice);

 

    // Filtro por Preço Máximo

    const matchesMaxPrice =

      maxPrice === '' || product.preco <= parseFloat(maxPrice);

 

    return matchesName && matchesMinPrice && matchesMaxPrice;

  });

 

  // Ordenação

  const sortedProducts = [...filteredProducts].sort((a, b) => {

    if (sortBy === 'nome-asc') return a.nome.localeCompare(b.nome);

    if (sortBy === 'nome-desc') return b.nome.localeCompare(a.nome);

    if (sortBy === 'preco-asc') return a.preco - b.preco;

    if (sortBy === 'preco-desc') return b.preco - a.preco;

    return 0;

  });

 

  return (

    <div>

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold text-gray-800">

          Produtos ({sortedProducts.length})

        </h2>

      </div>

 

      {sortedProducts.length === 0 ? (

        <div className="bg-white p-8 text-center rounded-lg shadow-sm border border-gray-200">

          <p className="text-gray-500">Nenhum produto encontrado com os filtros aplicados.</p>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {sortedProducts.map((product) => (

            <ProductCard key={product.id} product={product} />

          ))}

        </div>

      )}

    </div>

  );

};

