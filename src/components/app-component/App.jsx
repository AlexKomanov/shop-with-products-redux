import Header from "../header-component/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Products from "./../products-component/Products";
import ProductDetail from "../product-detail-component/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
