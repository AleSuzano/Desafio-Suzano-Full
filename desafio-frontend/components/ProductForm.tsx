'use client';

import React, { useState } from 'react';
import { useProducts } from '@/context/ProductContext'; // ajuste para '../context/ProductContext' se necessário

export const ProductForm: React.FC = () => {

  const { addProduct } = useProducts();

 

  const [nome, setNome] = useState('');

  const [categoria, setCategoria] = useState('');

  const [preco, setPreco] = useState('');

  const [descricao, setDescricao] = useState('');

  const [imagem, setImagem] = useState('');

 

  const [sucessoMsg, setSucessoMsg] = useState(false);

 

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

 

    if (!nome || !categoria || !preco || !descricao) {

      alert('Por favor, preencha todos os campos obrigatórios.');

      return;

    }

 

    addProduct({

      nome,

      categoria,

      preco: parseFloat(preco),

      descricao,

      imagem: imagem || '[suspicious link removed]',

    });

 

    // Limpar formulário

    setNome('');

    setCategoria('');

    setPreco('');

    setDescricao('');

    setImagem('');

 

    setSucessoMsg(true);

    setTimeout(() => setSucessoMsg(false), 3000);

  };

 

  return (

    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">

      <h2 className="text-xl font-bold text-gray-800 mb-4">Cadastrar Novo Produto</h2>

 

      {sucessoMsg && (

        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">

          Produto cadastrado com sucesso!

        </div>

      )}

 

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Nome */}

          <div>

            <label className="block text-xs font-semibold text-gray-600 mb-1">

              Nome do Produto *

            </label>

            <input

              type="text"

              required

              placeholder="Ex: Teclado Mecânico"

              value={nome}

              onChange={(e) => setNome(e.target.value)}

              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"

            />

          </div>

 

          {/* Categoria */}

          <div>

            <label className="block text-xs font-semibold text-gray-600 mb-1">

              Categoria *

            </label>

            <input

              type="text"

              required

              placeholder="Ex: Periféricos"

              value={categoria}

              onChange={(e) => setCategoria(e.target.value)}

              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"

            />

          </div>

 

          {/* Preço */}

          <div>

            <label className="block text-xs font-semibold text-gray-600 mb-1">

              Preço (R$) *

            </label>

            <input

              type="number"

              step="0.01"

              min="0"

              required

              placeholder="Ex: 250.00"

              value={preco}

              onChange={(e) => setPreco(e.target.value)}

              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"

            />

          </div>

 

          {/* URL da Imagem */}

          <div>

            <label className="block text-xs font-semibold text-gray-600 mb-1">

              URL da Imagem

            </label>

            <input

              type="url"

              placeholder="[suspicious link removed]"

              value={imagem}

              onChange={(e) => setImagem(e.target.value)}

              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"

            />

          </div>

        </div>

 

        {/* Descrição */}

        <div>

          <label className="block text-xs font-semibold text-gray-600 mb-1">

            Descrição *

          </label>

          <textarea

            required

            rows={3}

            placeholder="Descreva as principais características do produto..."

            value={descricao}

            onChange={(e) => setDescricao(e.target.value)}

            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 resize-none"

          />

        </div>

 

        <button

          type="submit"

          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"

        >

          Cadastrar Produto

        </button>

      </form>

    </div>

  );

};