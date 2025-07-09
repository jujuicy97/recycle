import { useParams } from "react-router-dom";


const DetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>상품 상세페이지</h2>
      <p>상품의 ID : {id}</p>
    </div>
  );
};

export default DetailPage;