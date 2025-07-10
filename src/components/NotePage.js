import { useParams } from "react-router-dom";
import DetailPage_Keyword from "./DetailPage_Keyword";
import UsageGuide from "./UsageGuide";import selectItem from '../assets/new-items.json';
import { MdOutlineStar } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

import UsageGuide from "./UsageGuide";
import ProductInfo from "./ProductInfo";
import NotePage_Keyword from "./NotePage_Keyword";

const DetailPage = () => {
  const month = new Date().getMonth()+1;
  const date = new Date().getDate()+2;
const NotePage = () => {
  const { id } = useParams();
  const filter = selectItem.filter((value,idx)=>{
    if(id === value.id){
      return value;
    }
  })
  const currentItem = filter[0];
  window.scrollTo(0,0);

  return (
    <div className="detail-page">
      <img src={`${process.env.PUBLIC_URL}${currentItem.image}`}/>
      <div className="title-top">
        <div>
          <h2>{currentItem.title}</h2>
          <div className="reviews">
            <MdOutlineStar className="star"/>
            <MdOutlineStar className="star"/>
            <MdOutlineStar className="star"/>
            <MdOutlineStar className="star"/>
            <MdOutlineStar className="star"/>
            <span>(91,607)</span>
          </div>
        </div>
        <GoShareAndroid className="share-icon"/>
      </div>
      <div className="price">
        <h2>￦ {currentItem.price}</h2>
        <span>특가</span>
      </div>
      <div className="privilige">
        <span>혜택</span>
        <div className="two-type">
          <p><strong>{currentItem.price/1000}P</strong> 적립 (WELCOME 0.1%적립)</p>
          <p>최대 <strong>7%</strong> 결제할인 (토스페이)<button>＞</button></p>
        </div>
      </div>
      <div className="deliver">
          <span>배송</span>
          <div className="deli-info">
            <strong>무료배송</strong>
            <div className="deli-now">
              <p>지금 주문시 <span>내일 출발</span></p>
              <CiCircleInfo/>
            </div>
            <p>일반택배</p>
            <p className="plus-charge">
              <FaCheck /> 제주도/도서산간 지역 4,000원
            </p>
          </div>
      </div>
      <div className="deli-date">
        <p className="text">
          <FiPackage/> <strong>{month}/{date}</strong> 도착 예정 92%
        </p>
        <FaChevronDown className="down-arrow"/>
      </div>
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
  );
};

export default NotePage;
