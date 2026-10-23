import { Product } from '@/types/product'; // ou '../types/product' se não estiver usando o atalho @ 

export const initialProducts: Product[] = [ 
    { 
        id: '1', 
        nome: 'Notebook Gamer', 
        categoria: 'Eletrônicos', 
        preco: 4500, 
        descricao: 'Notebook de alto desempenho para jogos e trabalho.', 
        imagem: '[suspicious link removed]', 
    }, 
    { 
        id: '2', 
        nome: 'Mouse Sem Fio', 
        categoria: 'Acessórios', 
        preco: 120, 
        descricao: 'Mouse ergonômico com conexão Bluetooth.', 
        imagem: '[suspicious link removed]', 
    }, 
];
 