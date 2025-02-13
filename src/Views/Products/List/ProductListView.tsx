import React from "react";
import { useListProductsViewModel } from "./useListProductsViewModel";

export const ProductsList: React.FC = () => {
  const { products, isLoading } = useListProductsViewModel();

  return (
    <div>
      {isLoading && <div>Carregando...</div>}
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};
