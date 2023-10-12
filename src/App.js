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
import SingleProductPage from "./pages/singleProductPage";
import { useState } from "react";
import NewItem from "./pages/newItem";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const [userImg, setUserImg]  = useState("");
  const [userEmail, setUserEmail]  = useState("");
  const [isLoggedIn, setIsloggedIn]  = useState(false);

  const signInForImageHandler = (img) => {
    setUserImg(img)
  }

  const signInHandler = () => {
    setIsloggedIn(true)
  }
  const emailHandler = (email) => {
    setUserEmail(email)
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            imgUrl:userImg,
            signInHandler
          }}>
        <Layout></Layout>
            </AuthContext.Provider>
        } >
        <Route index element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="dashboard" element={
          
          <AuthContext.Provider value={{
            userEmail:userEmail
          }}>

        <Dashboard></Dashboard>
          </AuthContext.Provider>
      } 
        />
        <Route path="allProducts" element={<AllProducts></AllProducts>} />
        <Route path="addProduct" element={
          <AuthContext.Provider value={{
            userEmail:userEmail
          }}>
        <NewItem></NewItem>
          </AuthContext.Provider>
      }
         />
        <Route path="allProducts/singleProductPage/:porductID" element={<SingleProductPage></SingleProductPage>} />

        {/* nested route */}
          <Route path="account/" >
          <Route index element={
            <AuthContext.Provider value={{
              signInForImageHandler,signInHandler,emailHandler
            }}>
              <MyAccount ></MyAccount>
              </AuthContext.Provider>
            } />
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
