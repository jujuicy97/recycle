import { useParams } from "react-router-dom";
import UsageGuide from "./UsageGuide";
import ProductInfo from "./ProductInfo";
import NotePage_Keyword from "./NotePage_Keyword";


const NotePage = () => {
  const { id } = useParams();
    <div className="wrapper">
      <main>

        <section className="shared-main">
          <p>공통 메인 자리</p>
        </section>

        <article className="product-detail">
          <h2>Re:note</h2>
          <p>Re:note는 다시 쓰임을 고민하는 노트입니다.</p>
          
          <section className="main-txt">
            <p>
              다시 쓰는 오늘, 다시 피는 이야기.
              <br />
              낡고 쓸모없다 여겨졌던 것들이
              <br />
              새로운 재료가 되어 다시 쓰임이 됩니다.
            </p>
            <img src="/images/note/note-1.jpg" />
          </section>

          <section className="img-wrap">
              <img src="/images/note/note-2.jpg" />
              <img src="/images/note/note-3.jpg" />
              <img src="/images/note/note-4.jpg"  className="row"/>
              <img src="/images/note/note-5.jpg" />
              <p>
                재생지 노트는,
                <br />
                버려진 종이를 재가공한
                <br />
                재생지를 사용하여 만듭니다.
              </p>
          </section>

          <section>
            <NotePage_Keyword />
          </section>

          <section>
            <UsageGuide />
          </section>

          <section>
            <ProductInfo />
          </section>
          
          
        </article>
      </main>
    </div>
};

export default NotePage;
