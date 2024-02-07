import SmContainer from "../layout/SmContainer";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ExtraSmContainer from "../layout/ExtraSmContainer";
import Recomendations from "../components/Recomendations";
import { useSearch } from "../hooks/customHooks/useSearch";

const Dogs = () => {
  const [dogSearch, setDogSearch] = useState("");

  const handleSubmitSearchDog = useSearch();

  const handleSearchDog = (e) => {
    setDogSearch(e.target.value);
  };

  return (
    <>
      <section className="search-section">
        <SmContainer>
          <div className="search-wrapper">
            <h1>Start by Typing the Name of the Dog Breed</h1>
            <SearchBar
              onChange={handleSearchDog}
              onSubmit={(e) => handleSubmitSearchDog(e, dogSearch)}
              value={dogSearch}
            />
            <Recomendations />
          </div>
        </SmContainer>
      </section>
      <section className="favorite-info-section">
        <ExtraSmContainer>
          <div className="favorite-info-wrapper">
            <div className="favorite-info-img">
              <span>
                <img
                  src="https://api-ninjas.com/images/dogs/australian_cattle_dog.jpg"
                  alt="australian-cattle"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="#fff"
                  />
                </svg>
              </span>
            </div>
            <div className="favorite-info-text">
              <h1>Add to favorite breeds of dog</h1>
              <p>
                Click love icon on breeds of dog that you choosed and see your
                favorites breeds of dog on favorite page.
              </p>
            </div>
          </div>
        </ExtraSmContainer>
      </section>
    </>
  );
};

export default Dogs;
