import { useParams } from "react-router-dom";

const DetailDog = () => {
  const { name } = useParams();
  const decodedQuery = decodeURIComponent(name);
  return <div>this is detail dog {decodedQuery}</div>;
};

export default DetailDog;
