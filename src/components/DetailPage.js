import { useParams } from "react-router-dom";
import selectItem from '../assets/new-items.json';
import { MdOutlineStar } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";


const DetailPage = () => {
  const month = new Date().getMonth()+1;
  const date = new Date().getDate()+2;
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
    </div>
  );
};

export default DetailPage;