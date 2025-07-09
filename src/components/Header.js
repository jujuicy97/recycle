import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const style = {
    cursor: "pointer",
  };

  return (
    <header>
      <div className="head">
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
          src={`${process.env.PUBLIC_URL}/images/logo-01.png`}
          alt="zero-flow 초록 색상 로고"
        />
        <Menu isOpen={isOpen} />
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
