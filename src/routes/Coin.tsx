import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();
  return (
    <>
      <div>coin:{coinId}</div>
    </>
  );
}

export default Coin;