import { useParams } from "react-router-dom";
import selectItem from '../assets/new-items.json';
import { MdOutlineStar } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Shampoobar from "./Shampoobar";
import NotePage from "./NotePage";
import Straw from "./Straw";
import KeyRing from "./KeyRing";
import { FaRegBookmark } from "react-icons/fa";
import { useState } from "react";


const DetailPage = ({onAddCart}) => {
  const [count,setCount] = useState(0);
  const month = new Date().getMonth()+1;
  const date = new Date().getDate()+2;
  const { id } = useParams();
  const AddCartDetail = (item,count)=>{
    if(count > 0){
      onAddCart(item,count);
      alert("장바구니에 추가되었습니다.");
    } else {
      alert("수량이 체크되지않았습니다.")
    }
    setCount(0);
  }
  const filter = selectItem.filter((value,idx)=>{
    if(id === value.id){
      return value;
    }
  })
  const handleAddButton = ()=>{
    if(count < 99){
      setCount(count+1);
    }
  }
  const handleMinusButton = ()=>{
    if(count > 0){
      setCount(count-1);
    }
  }
  const currentItem = filter[0];
  const ProductDetail = ()=>{
    switch (currentItem.id){
      case "item001":
        return <NotePage/>;
      case "item002":
        return <KeyRing/>;
      case "item003":
        return <Shampoobar/>;
      case "item004":
        return <Shampoobar/>;
      case "item005":
        return <Straw/>;
      case "item006":
        return <Straw/>;
      case "item007":
        return <NotePage/>;
      case "item008":
        return <KeyRing/>;
      default:
        return null;
    }
  }
  window.scrollTo(0,0);

  return (
    <div className="detail-page">
      <div className="pc-wrap">
        <div className="img-wrap">
          <img src={`${process.env.PUBLIC_URL}${currentItem.image}`}/>
        </div>
        <div className="info-wrap">
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
            <div className="book-share">
              <FaRegBookmark className="only-pc"/>
              <GoShareAndroid className="share-icon"/>
            </div>
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
          <div className="mobile-order">
          <div className="count-wrap">
            <p>{currentItem.title}</p>
            <div className="count-price">
              <div className="count">
                <button onClick={handleMinusButton}>-</button>
                <p>{count}</p>
                <button onClick={handleAddButton}>+</button>
              </div>
              <strong>{currentItem.price*count}원</strong>
            </div>
          </div>
          <div className="total">
            <strong>주문 금액</strong>
            <h3>{currentItem.price*count}원</h3>
          </div>
          </div>
          <div className="order-wrap">
            <button onClick={()=>{AddCartDetail(currentItem,count)}}>장바구니</button>
            <button>바로구매</button>
          </div>
        </div>
      </div>
      <div className="several-detail">
        <p className="highlight">상품정보</p>
        <p>리뷰(3,401)</p>
        <p>문의(6)</p>
        <p>배송/환불</p>
      </div>
      {ProductDetail()}
    </div>
  );
};

export default DetailPage;
