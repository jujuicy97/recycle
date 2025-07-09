
const Menu = ({ isOpen }) => {
  return (
    <nav className={isOpen ? "mobile-open" : ""}>
      <div className="menu-wrapper">
        <div className="story">
          <p>Brand Story</p>
        </div>
        <div className="shop">
          <p>Shop</p>
          <ul className="shop-menu">
            <li>paper</li>
            <li>plastic</li>
            <li>reusable</li>
          </ul>
        </div>
        <div className="project">
          <p>Project</p>
          <ul className="project-menu">
            <li>recycle</li>
          </ul>
        </div>
        <div className="community">
          <p>Community</p>
          <ul className="community-menu">
            <li>배송 및 반품</li>
            <li>자주 묻는 질문</li>
            <li>문의하기</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
