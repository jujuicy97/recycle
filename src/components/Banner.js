
const Banner = () => {
  return (
    <div id="banner">
      <div className="bg-img">
        <img src={`${process.env.PUBLIC_URL}/images/brand-main-01.jpg`} alt="zero flow 나뭇잎 배경" />
      </div>
      <div className="story">
        <div className="story-zero">
          <h1>BRAND STORY</h1>
        </div>
        <div className="story-one">
          <p>
            지속가능한 미래를 위한 우리의 발걸음
            <br />
            제로에서 시작하는 푸른 약속
          </p>
        </div>
        <div className="story-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-02.png`}
            alt="zero flow 베이지 색상 로고"
            //배경때문에 색이 안보여서 임의로 색 바꿔서 넣음
          />
        </div>
        <div className="story-two">
          <p>
            우리가 추구하는 것은 단순히 쓰레기를 줄이는 것을 넘어, 모든 자원이
            자연의 흐름처럼 유연하게 순환하며 새로운 가치를 창출하는 것입니다.
            <br />
            <br />
            'Zero Flow'는 환경을 위한 우리의 작은 실천들이 모여, 지구의 건강한
            순환을 만들고 지속 가능한 미래로 나아가는 희망적인 메시지를
            전달합니다.
          </p>
        </div>
      </div>
      <div className="hashtag-wrap">
        <p className="hashtag">#친환경 제품</p>
        <p className="hashtag">#업사이클링</p>
        <p className="hashtag">#제로웨이스트</p>
        <p className="hashtag">#ZERO-PROJECT</p>
        <p className="hashtag">#지구 살리기</p>
      </div>
    </div>
  );
};

export default Banner;
