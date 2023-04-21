import axios  from "axios";

export class ProductService {
  static getAllPrds() {
    let dataURL = `https://fakestoreapi.com/products`;
    return axios.get(dataURL);
  }

  static getPrd(prdId) {
    let dataURL = `https://fakestoreapi.com/products/${prdId}`;
    return axios.get(dataURL);
  }

}