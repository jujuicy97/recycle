import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import BrandIntro from "./components/BrandIntro";
import CardList from "./components/CardList";
import Goods from "./components/Goods";
import Project from "./components/Project";
import ScrollBtn from "./components/ScrollBtn";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";
import Banner from "./components/Banner";
import Cart from "./components/Cart";


const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <>
                <Banner />
                <BrandIntro />
                <Goods />
                <CardList />
                <Project />
                <ScrollBtn />
              </>
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route
            path="/cart"
            element={<Cart cart={cart}/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;