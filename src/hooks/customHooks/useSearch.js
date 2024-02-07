import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const navigate = useNavigate();
  return (e, dogSearch) => {
    e?.preventDefault();
    const encodedSearchQuery = encodeURIComponent(dogSearch);
    navigate(`/dogs/${encodedSearchQuery}`);
  };
};
