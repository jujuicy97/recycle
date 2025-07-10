import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import BrandIntro from "./components/BrandIntro";
import CardList from "./components/CardList";
import Goods from "./components/Goods";
import Project from "./components/Project";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import SlideCarousel from "./components/SlideCarousel";


const App = () => {
  //장바구니에 리스트 추가
  const [cart, setCart] = useState([]);
  //카트에 id가 있는지 없는지 체크 -> id가 있으면 count 값을 1개 증가 / id가 없으면 count:1로 설정
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const temp = prev.find((i) => {
        return i.id === item.id;
      });
      let newItem = null;
      if (temp) {
        //id 똑같은 item 찾음
        newItem = prev.map((j) => {
          return j.id === item.id ? { ...j, count: j.count + 1 } : j;
        });
      } else {
        //id가 똑같은게 없음
        newItem = [...prev, { ...item, count: 1 }];
      }
      return newItem;
    });
  };
  //cart-item 삭제
  const handleDeleteCart = (id) => {
    setCart((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
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
                <CardList onAddCart={handleAddToCart} />
                <Project />
              </>
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onDelete={handleDeleteCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;