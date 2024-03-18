import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/pagenotfound";
//import Layout from "./components/Layout/Layout";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
//import { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
//import UserMenu from "./components/Layout/UserMenu";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import CreateProduct from "./pages/Admin/CreateProduct";
import Product from "./pages/Admin/Products";
import AdminOrders from "./pages/Admin/AdminOrders";
import Users from "../../client/src/pages/Admin/Users";
import UpdateProduct from "./pages/Admin/UpdateProduct";
//import Cart from "./context/cart";
 import CartPage from "./pages/CartPage";
 import Search from "./pages/Search";
 import ProductDetails from "./pages/ProductDetails";
import CategoryProduct from "../../client/src/pages/CategoryProduct";
function App() {
  return (
    <>
    {/* <Layout>
      <h1>Ecommerce app</h1>
    </Layout> */}
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/product" element={<Product />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    
     
    </>
  );
}

export default App;
