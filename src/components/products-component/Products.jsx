import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product-component/Product";
import { setProducts } from './../../redux/actions/productActions';

const Products = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    .then((data) => data.json());
    dispatch(setProducts(response));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Product />
    </div>
  );
};
export default Products;
