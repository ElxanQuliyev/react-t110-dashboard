import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";

function App() {

  // const { userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo && userInfo.isAdmin) {
  //     dispatch(listProducts());
  //     dispatch(listOrders());
  //   }
  // }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products" component={ProductScreen} />
          <Route path="/category" component={CategoriesScreen} />
          <Route path="/orders" component={OrderScreen} />
          <Route path="/order/:id" component={OrderDetailScreen} />
          <Route path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/users" component={UsersScreen} />
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
          />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
