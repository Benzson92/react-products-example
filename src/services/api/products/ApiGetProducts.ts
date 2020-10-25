import Axios from 'axios';
import { ProductDTO } from '../../../models/product/ProductDTO';

export class ApiGetProducts {
  get() {
    const url = `${process.env.REACT_APP_API_URL}/product`;

    return Axios.get<ProductDTO[]>(url);
  }
}
