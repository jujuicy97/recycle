import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewItem from "../assets/new-items.json";
import Shampoobar from "./Shampoobar";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // 실제 애플리케이션에서는 여기서 API를 호출하여 상품 ID에 해당하는 데이터를 가져옵니다.
    // fetch(`/api/products/${id}`).then(res => res.json()).then(data => setProduct(data));
    // 여기서는 예시 데이터를 사용합니다.
    const foundProduct = NewItem.map((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]); // id 값이 변경될 때마다 useEffect가 다시 실행됩니다.

  if (!product) {
    return <div>상품 정보를 불러오는 중이거나, 상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>상품 상세페이지</h2>
      <p>상품 ID : {id}</p>
      <Shampoobar />
    </div>
  );
};

export default DetailPage;
