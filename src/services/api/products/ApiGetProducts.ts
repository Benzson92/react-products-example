import Axios from 'axios';
import { ProductDTO } from '../../../models/product/ProductDTO';

export class ApiGetProducts {
  get() {
    const url = `https://cc-mock-api.herokuapp.com/product`;

    return Axios.get<ProductDTO[]>(url);
  }
}
