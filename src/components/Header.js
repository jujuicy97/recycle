import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import logo1 from "../images/logo-01.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const style = {
    cursor: "pointer",
  };

  return (
    <header>
      <Menu isOpen={isOpen} className="menu" />
      {isOpen && (
        <div className="dimmed-bg" onClick={() => setIsOpen(false)}></div>
      )}
      <div className="head">
        <div className="left">
          <IoMdMenu
            className="menu-btn"
            style={style}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <img
            onClick={() => {
              navigate("/");
            }}
            src={logo1}
            alt="zero flow 초록 색상 로고"
          />
        </div>
        <div
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FaShoppingCart />
          <p>CART</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
