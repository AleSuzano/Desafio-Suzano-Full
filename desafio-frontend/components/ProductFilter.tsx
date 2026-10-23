'use client';

import React from 'react';
import { useProducts } from '@/context/ProductContext'; // ajuste o caminho se necessário ('../context/ProductContext')

export const ProductFilter: React.FC = () => {

  const {

    searchTerm,

    setSearchTerm,

    minPrice,

    setMinPrice,

    maxPrice,

    setMaxPrice,

    sortBy,

    setSortBy,

  } = useProducts();

 

  return (

    <div className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200">

      <h2 className="text-lg font-bold text-gray-800 mb-3">Filtros e Ordenação</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Busca por Nome */}

        <div>

          <label className="block text-xs font-semibold text-gray-600 mb-1">

            Buscar por Nome

          </label>

          <input

            type="text"

            placeholder="Ex: Notebook..."

            value={searchTerm}

            onChange={(e) => setSearchTerm(e.target.value)}

            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"

          />

        </div>

 

        {/* Preço Mínimo */}

        <div>

          <label className="block text-xs font-semibold text-gray-600 mb-1">

            Preço Mínimo (R$)

          </label>

          <input

            type="number"

            placeholder="0"

            value={minPrice}

            onChange={(e) => setMinPrice(e.target.value)}

            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"

          />

        </div>

 

        {/* Preço Máximo */}

        <div>

          <label className="block text-xs font-semibold text-gray-600 mb-1">

            Preço Máximo (R$)

          </label>

          <input

            type="number"

            placeholder="9999"

            value={maxPrice}

            onChange={(e) => setMaxPrice(e.target.value)}

            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"

          />

        </div>

 

        {/* Ordenação */}

        <div>

          <label className="block text-xs font-semibold text-gray-600 mb-1">

            Ordenar Por

          </label>

          <select

            value={sortBy}

            onChange={(e) => setSortBy(e.target.value)}

            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-800"

          >

            <option value="nome-asc">Nome (A - Z)</option>

            <option value="nome-desc">Nome (Z - A)</option>

            <option value="preco-asc">Preço (Menor → Maior)</option>

            <option value="preco-desc">Preço (Maior → Menor)</option>

          </select>

        </div>

      </div>

    </div>

  );

}; 