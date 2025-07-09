const Straw = () => {
  return (
    <section className="product-detail">
      <div className="product-info">
        <h2>리유저블 스테인리스 빨대 세트</h2>

        <p className="short-desc">
          지구를 생각하는 당신의 선택, Zero Flow 리유저블 스테인리스 빨대
          세트입니다. 일회용 플라스틱 빨대 대신 반영구적으로 사용할 수 있는
          친환경 대안으로, 매일 사용하는 음료 시간을 더욱 특별하게
          만들어드립니다. 세련된 디자인과 실용성을 모두 갖춘 Zero Flow 빨대
          세트로 제로웨이스트 라이프스타일을 시작해보세요.
        </p>
        <ul className="feature-list">
          <li>스테인리스 재질로 반영구 사용</li>
          <li>세척솔 포함, 위생적인 관리 가능</li>
          <li>고급 파우치 제공으로 휴대성 UP</li>
        </ul>
        <div className="spec">
          <p>
            <strong>구성:</strong> 곧은 빨대, 꺾인 빨대, 세척솔 1개, 파우치 1개
          </p>
          <p>
            <strong>재질:</strong> Stainless 304
          </p>
          <p>
            <strong>사이즈:</strong> 빨대 길이 약 21.5cm
          </p>
        </div>
      </div>
      <div className="product-image">
        <img
          img
          src={`${process.env.PUBLIC_URL}/images/new-items/new-item-05-1.jpg`}
          alt="리유저블 스테인리스 빨대 세트"
        />
      </div>
      <div className="product-info">
        <p className="short-desc">지속가능한 환경을 위한 친환경 선택</p>
      </div>
      <div className="product-gallery">
        <img
          src={`${process.env.PUBLIC_URL}/images/new-items/new-item-05-2.jpg`}
          alt="구성품 상세 이미지"
        />
      </div>
    </section>
  );
};

export default Straw;
