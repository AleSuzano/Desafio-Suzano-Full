import { describe, it, expect } from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import { Product } from '@/types/product';
 
const mockProduct: Product = {
  id: '1',
  nome: 'Notebook Gamer',
  categoria: 'Eletrônicos',
  preco: 4500,
  descricao: 'Notebook de alto desempenho para jogos e trabalho.',
  imagem: '[suspicious link removed]',
};
 
describe('ProductCard Component', () => {
  it('deve corresponder ao snapshot do componente', () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    expect(container).toMatchSnapshot();
  });
});