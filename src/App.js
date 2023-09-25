import "./App.css";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import AllProducts from "./pages/allProducts";
import Contact from "./pages/contact";
import AddToCart from "./pages/addToCart";
import MyAccount from "./pages/account/myAccount";
import Cart from "./pages/account/cart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout></Layout>} >
        <Route index element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="dashboard" element={<Dashboard></Dashboard>} />
        <Route path="allProducts" element={<AllProducts></AllProducts>} />

        {/* nested route */}
        <Route>
          <Route path="account/" />
          <Route index element={<MyAccount></MyAccount>} />
          <Route path="cart" element={<Cart></Cart>} />
        </Route>
        {/* end nested route */}

        <Route path="contact" element={<Contact></Contact>} />
        <Route path="addToCart" element={<AddToCart></AddToCart>} />
        
        </ Route>
      </Routes>
    </div>
  );
}

export default App;
