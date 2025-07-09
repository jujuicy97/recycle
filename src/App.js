import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrandIntro from "./components/BrandIntro";
import CardList from "./components/CardList";
import Goods from "./components/Goods";
import Project from "./components/Project";
import ScrollBtn from "./components/ScrollBtn";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";
import Banner from "./components/Banner";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <>
                <Banner/>
                <BrandIntro/>
                <Goods/>
                <CardList/>
                <Project />
                <ScrollBtn />
              </>
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;