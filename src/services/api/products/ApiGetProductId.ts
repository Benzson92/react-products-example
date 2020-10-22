import Axios from 'axios';
import { ProductDTO } from '../../../models/product/ProductDTO';

export class ApiGetProductId {
  get(id: string) {
    const url = `https://cc-mock-api.herokuapp.com/product/${id}`;

    return Axios.get<ProductDTO>(url);
  }
}
