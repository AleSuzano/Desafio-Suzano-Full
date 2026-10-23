'use client'; 

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/product';
import { initialProducts } from '@/services/mockproducts'; 

interface ProductContextType { 
    products: Product[]; 
    addProduct: (product: Omit<Product, 'id'>) => void; 
    searchTerm: string; 
    setSearchTerm: (term: string) => void; 
    minPrice: string; 
    setMinPrice: (price: string) => void; 
    maxPrice: string; 
    setMaxPrice: (price: string) => void; 
    sortBy: string; 
    setSortBy: (sort: string) => void; 
} 

const ProductContext = createContext<ProductContextType | undefined>(undefined); 
export const ProductProvider = ({ children }: { children: ReactNode }) => { 
    const [products, setProducts] = useState<Product[]>(initialProducts); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [minPrice, setMinPrice] = useState(''); 
    const [maxPrice, setMaxPrice] = useState(''); 
    const [sortBy, setSortBy] = useState('nome-asc'); 
    
    // Adicionar novo produto na lista 
    const addProduct = (newProductData: Omit<Product, 'id'>) => { 
        const newProduct: Product = { 
            ...newProductData, 
            id: Date.now().toString(), 
        }; 
        setProducts((prev) => [newProduct, ...prev]); 
    }; 
    
    return ( 
        <ProductContext.Provider 
            value={{ products, addProduct, searchTerm, setSearchTerm, minPrice, setMinPrice, maxPrice, setMaxPrice, sortBy, setSortBy, 
            }} 
        > 
            {children} 
        </ProductContext.Provider> 
        );
     }; 
     export const useProducts = () => { 
        const context = useContext(ProductContext); 
        if (!context) { 
            throw new Error('useProducts deve ser usado dentro de um ProductProvider'); 
        } 
        return context; 
    };