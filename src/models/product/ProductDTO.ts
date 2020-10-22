export interface ProductDTO {
  _id: string;
  name: string;
  image_url: string;
  description: string;
  price: string;
  brand_info: BrandInfo;
}

interface BrandInfo {
  id: string;
  name: string;
  url: string;
}
