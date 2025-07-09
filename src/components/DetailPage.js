import { useParams } from "react-router-dom";
import Straw from "./Straw";

const DetailPage = () => {
  const { id } = useParams();
  if (id === "item005" || id === "item011") return <Straw />;
  return (
     <div>
        <h2>상품 상세페이지</h2>
        <p>상품 ID : {id}</p>
      </div> 
  );
};

export default DetailPage;