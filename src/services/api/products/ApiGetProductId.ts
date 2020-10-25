import Axios from 'axios';
import { ProductDTO } from '../../../models/product/ProductDTO';

export class ApiGetProductId {
  get(id: string) {
    const url = `${process.env.REACT_APP_API_URL}/product/${id}`;

    return Axios.get<ProductDTO>(url);
  }
}
