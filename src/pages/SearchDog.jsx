import axios from "axios";
import { useEffect, useState, useRef } from "react";
import CustomImage from "../components/CustomImage";
import SearchBar from "../components/SearchBar";
import { useParams, Link } from "react-router-dom";
import Container from "../layout/Container";
import { useSelector, useDispatch } from "react-redux";
import {
  getFavoriteDogs,
  favoriteDogSelectors,
  saveFavoriteDog,
  deleteFavoriteDog,
} from "../features/favoriteDogSlice";
import CardSkeleton from "../utils/CardSkeleton";
import { useSearch } from "../hooks/customHooks/useSearch";
import toast from "react-hot-toast";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchDog = () => {
  const { name } = useParams();
  const decodedQuery = decodeURIComponent(name);

  const [dogSearch, setDogSearch] = useState(decodedQuery);
  const [dogResults, setdogResults] = useState([]);
  const [dogResultWithFav, setDogResultWithFav] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dogResultLength = Object.keys(dogResultWithFav).length;

  const dogs = useSelector(favoriteDogSelectors.selectAll);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteDogs());
  }, [dispatch]);

  useEffect(() => {
    search(dogSearch);
    setIsSearch(false);
  }, [isSearch]);

  const search = async (name) => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    const options = {
      method: "GET",
      url: `https://api.api-ninjas.com/v1/dogs?name=${name}`,
      headers: {
        "X-Api-Key": API_KEY,
      },
    };

    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setdogResults(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    setDogResultWithFav(() => {
      const modifiedDogs = dogResults.map((dog) => ({
        ...dog,
        isFavorite: dogs.some((dogFav) => dogFav.name === dog.name),
      }));

      return modifiedDogs;
    });
  }, [dogResults, dogs]);

  const handleSearchDog = (e) => {
    setDogSearch(e.target.value);
  };

  const handleSearch = useSearch();

  const handleSubmitSearchDog = (e) => {
    handleSearch(e, dogSearch);
    setIsSearch(true);
  };

  const spanRefs = useRef([]);

  const handleClickFavorite = (name, image_link, isFavorite, index) => {
    const spans = spanRefs.current; // Get the array of span references
    const changeColorIcon = (color) => {
      if (spans[index]) {
        spans[index].style.fill = color;
        spans[index].style.stroke = color;
      }
    };

    if (!isFavorite) {
      try {
        dispatch(saveFavoriteDog({ name, image_link }));
        changeColorIcon("red");
        toast.success("Added to favorites");
      } catch (error) {
        toast.error(error);
      }
    } else {
      try {
        dispatch(deleteFavoriteDog(name));
        changeColorIcon("white");
        toast.success("Removed from favorites");
      } catch (error) {
        toast.error(error);
      }
    }

    setDogResultWithFav(() => {
      return dogResultWithFav.map((dog) =>
        dog.name === name ? { ...dog, isFavorite: !isFavorite } : dog
      );
    });
  };

  return (
    <section className="search-page">
      <Container>
        <div className="header-search">
          <SearchBar
            onChange={handleSearchDog}
            onSubmit={handleSubmitSearchDog}
            value={dogSearch}
            isDisable={isSearch}
          />
        </div>
        <h1 className="header-text-result-search">
          Results for {decodedQuery}
        </h1>
        {isLoading ? (
          <>
            <p className="text-result-info">
              <SkeletonTheme baseColor="#333" highlightColor="#999">
                <Skeleton className="result-skeleton" />
              </SkeletonTheme>
            </p>
            <div className="row">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </>
        ) : dogResultLength > 0 ? (
          <>
            <p className="text-result-info">
              You have {dogResultLength} breed options to explore
            </p>
            <div className="row">
              {dogResultWithFav.map((dogResult, index) => (
                <div key={index} className="card">
                  <div
                    //to={`/dogs/${encodeURIComponent(dogResult.name)}/detail`}
                    className="card-content"
                  >
                    <CustomImage
                      src={dogResult.image_link}
                      alt={dogResult.name}
                      className="card-image"
                    />
                    <span className="card-title">{dogResult.name}</span>
                  </div>
                  <div
                    onClick={() =>
                      handleClickFavorite(
                        dogResult.name,
                        dogResult.image_link,
                        dogResult.isFavorite,
                        index
                      )
                    }
                    className="card-action-fav"
                  >
                    <svg
                      className="card-favorite"
                      title="add to favorite"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        ref={(el) => (spanRefs.current[index] = el)}
                        d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                        strokeWidth="1.5"
                        style={{
                          fill: `${dogResult.isFavorite ? "red" : "#fff"}`,
                          stroke: `${dogResult.isFavorite ? "red" : "#fff"}`,
                        }}
                        stroke="#fff"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-result-info">Not found breed for your search</p>
        )}
      </Container>
    </section>
  );
};

export default SearchDog;
