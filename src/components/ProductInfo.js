
const ProductInfo = () => {
  return (

    <section className="product-info">
      <h2>Product Info</h2>
      <div className="info-row">
        <span className="label">제품명</span>
        <span className="label">Re:note 진환경 재생지 노트</span>
      </div>

      <ul className="info-row">
         <span className="label">사이즈</span>
        <span className="label">150mm x 210mm / A5 사이즈</span>
      </ul>

  <hr />

      <div className="info-list">
        <h3>구성품 또는 소재</h3>
        <p>재생지 표지</p>
        <p>재생지 내지 100매</p>
        <p>천연 수성 잉크</p>
        <p>친환경 접착제 사용</p>
      </div>

  <hr />

    </section>
  );
};

export default ProductInfo;