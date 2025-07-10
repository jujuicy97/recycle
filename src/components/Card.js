
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({item,isHover,onAdd}) => {
  const {title,price,image,type} = item;
  const [checkHover,setCheckHover] = useState(false);
  const [showMsg,setShowMsg] = useState(false);
  //  console.log("카드 type 값:", type);

//상세페이지로 이동
  const navigate = useNavigate();

  const handleAddClick = ()=>{
    onAdd(item);
    setShowMsg(true);
    setTimeout(()=>{
      setShowMsg(false);
    },2000);
  }
  
  const getImageSrc = ()=>{
    if (!image) return "";
    const src = checkHover ? image.replace("-1", "-2") : image;
    // console.log("이미지경로:",src);
    return src;
  };

//상세페이지로 이동
  const handleImgClick = ()=>{
    navigate(`/detail/${item.id}`);
  }

  return (
    <div className="card"
    //마우스가 올라갔을 때, 같은 이름인 파일의 -2가 보여지고
      onMouseEnter={()=>{setCheckHover(true)}}
    //마우스가 영역을 벗어났을 때, 같은 이름이 보여지기
      onMouseLeave={()=>{setCheckHover(false)}}
    >
      {
        type && (
        <p className="card-btn">
          {
            type === "ZERO" ? "ZERO" : 
            type === "UPCYCLE" ? "UPCYCLE" : 
            type === "REUSABLE" ? "REUSABLE" : 
            ""
            }

        </p>
      )
    }
      <img className="card-img" src={getImageSrc()} alt={title} onClick={handleImgClick}/>
      {
        showMsg && <p className="popup-msg">장바구니에 담겼습니다</p>
      }
      <p className="card-title">{title}</p>
      <p className="card-price">{`￦ ${price}`}</p>
      <button className="card-add" onClick={handleAddClick}>Add Cart</button>
    </div>
  );
};

export default Card;