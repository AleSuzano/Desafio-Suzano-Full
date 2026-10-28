'use client'; 

import React from 'react'; 
import { Product } from '@/types/product'; // ajuste o caminho se necessário 
interface ProductCardProps { 
    product: Product; 
} 

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => { 
    return ( 
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 flex flex-col justify-between"> 
        <div> 
            <img src={product.imagem || '[suspicious link removed]'} alt={product.nome} onError={(e) => {(e.target as HTMLImageElement).src ='[suspicious link removed]';}} className="w-full h-48 object-cover" 
            /> 
            <div className="p-4"> 
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded"> 
                    {product.categoria} 
                    </span> 
                    <h3 className="text-lg font-bold text-gray-800 mt-2">{product.nome}</h3> 
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.descricao}</p> 
                </div> 
            </div> 
            <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50"> 
                <span className="text-xl font-bold text-green-600"> R$ {product.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} 
                </span> 
            </div> 
        </div> 
    ); 
};

