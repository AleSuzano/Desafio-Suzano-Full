import './globals.css';
import { ProductProvider } from '../context/ProductContext'; // Ajuste o caminho se necessário

export const metadata = {
  title: 'Gestão de Produtos',
  description: 'Teste Técnico Frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 min-h-screen">
        <ProductProvider>
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
