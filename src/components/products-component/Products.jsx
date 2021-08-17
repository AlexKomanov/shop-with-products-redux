import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product-component/Product";
import { setProducts } from './../../redux/actions/productActions';

const Products = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products")
    .catch((error) => {
      console.log(error);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log('products' + products);
  return (
    <div>
      <Product />
    </div>
  );
};
export default Products;
