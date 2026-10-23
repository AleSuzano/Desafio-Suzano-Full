export interface Product {
    id?: string | number;
    nome: string;
    categoria: string;
    preco: number;
    descricao: string;
    imagem: string // URL  da imagem
}