import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://localhost:3000';

export const getProducts = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const products: AxiosResponse<ApiDataType> = await axios.get(baseUrl + '/products');
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export const addProduct = async (formData: Product): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const product = {
      id: formData.id,
      name: formData.name,
      category: formData.category,
      price: formData.price,
    };
    const saveProduct: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/products',
      product
    );
    return saveProduct;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProduct = async (product: Product): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const updatedProduct: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/products/${product.id}`
    );
    return updatedProduct;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteProduct = async (id: number): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedProduct: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/product/${id}`
    );
    return deletedProduct;
  } catch (error) {
    throw new Error(error);
  }
};
