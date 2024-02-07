import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getFavoriteDogs,
  favoriteDogSelectors,
  deleteFavoriteDog,
} from "../features/favoriteDogSlice";
import Container from "../layout/Container";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Favorites = () => {
  const dispatch = useDispatch();
  const dogs = useSelector(favoriteDogSelectors.selectAll);

  useEffect(() => {
    dispatch(getFavoriteDogs());
  }, [dispatch]);

  const handleClickDeleteFavorite = (name) => {
    dispatch(deleteFavoriteDog(name));
    toast.success("berhasil dihapus");
  };

  return (
    <section className="favorite-section">
      <Container>
        <div className="favorite-wrapper">
          <h1 className="favorite-title">Favorites</h1>
          {dogs.length > 0 ? (
            <div className="row">
              {dogs.map((dog, idx) => (
                <div key={idx} className="card">
                  <div
                    //to={`/dogs/${encodeURIComponent(dog.name)}/detail`}
                    className="card-content"
                  >
                    <img
                      src={dog.image_link}
                      alt={dog.name}
                      className="card-image"
                    />
                    <span className="card-title">{dog.name}</span>
                  </div>
                  <div
                    onClick={() => handleClickDeleteFavorite(dog.name)}
                    className="card-action-fav"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.5001 6H3.5"
                        stroke="#fff"
                        fill="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                        stroke="#fff"
                        fill="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                        stroke="#fff"
                        fill="#fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="favorite-is-empty">
              Your favorite breeds of dog is empty.{" "}
              <Link to="/dogs">Add to Favorite Breeds of dog</Link>
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Favorites;
