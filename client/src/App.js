import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Staff from "./components/Staff";
import { Route, Redirect, Switch } from "react-router-dom";
import InfoStaff from "./components/InfoStaff";
import Login from "./components/buttons/login/Login";
import Signup from "./components/buttons/signup/Signup";
import Logout from "./components/Logout";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";
import BuyNow from "./components/BuyNow";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ManagementUser from "./components/managementuser/ManagementUser";



function App() {
  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch("/auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      // status login
      if (res.status === 200) {
        setAuth(true);
        setAuth1(false);
      }
      // status logout
      if (res.status === 401) {
        setAuth(false);
        setAuth1(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      <Header auth={auth1}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <ProtectedRoute
          exact
          path="/products/:id"
          component={BuyNow}
          auth={auth}
        />
        <Route exact path="/staff" component={Staff} />
        <ProtectedRoute exact path="/signup" component={Signup} auth={auth1} />
        <ProtectedRoute exact path="/login" component={Login} auth={auth1} />
        <ProtectedRoute exact path="/logout" component={Logout} auth={auth} />
        <Route exact path="/infostaff" component={InfoStaff} />
        <Route exact path="/about" component={About} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/managementuser" component={ManagementUser} />
        <ProtectedRoute exact path="/cart" component={Cart} auth={auth} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
