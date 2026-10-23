'use client';

 

import { ProductForm } from '@/components/ProductForm'; // ou '../components/ProductForm'

import { ProductFilter } from '@/components/ProductFilter';

import { ProductList } from '@/components/ProductList';

 

export default function Home() {

  return (

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <header className="mb-8 border-b border-gray-200 pb-4">

        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">

          Painel de Gestão de Produtos

        </h1>

        <p className="text-sm text-gray-600 mt-1">

          Teste Técnico Frontend - Next.js, TypeScript e Tailwind CSS

        </p>

      </header>

 

      {/* Formulário de Cadastro */}

      <ProductForm />

 

      {/* Filtros e Ordenação */}

      <ProductFilter />

 

      {/* Listagem de Produtos */}

      <ProductList />

    </main>

  );

}
