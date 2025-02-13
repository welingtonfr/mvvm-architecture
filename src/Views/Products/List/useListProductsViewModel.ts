
import { ProductService } from '../../../Services/ProductService';
import { useFetcher } from '../../../Hooks/useFetcher';
export const useListProductsViewModel = () => {
   const { data: products, isLoading } = useFetcher(ProductService.getProducts);

   return { products, isLoading };
}