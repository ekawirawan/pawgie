import SearchBar from "../components/SearchBar";
import { useState } from "react";
import SmContainer from "../layout/SmContainer";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Recomendations from "../components/Recomendations";
import { useSearch } from "../hooks/customHooks/useSearch";

const Home = () => {
  const slideshowImages = [
    {
      image: "https://api-ninjas.com/images/dogs/australian_shepherd.jpg",
      name: "Australian Shepherd",
    },
    {
      image:
        "https://api-ninjas.com/images/dogs/cavalier_king_charles_spaniel.jpg",
      name: "Cavalier King Charles Spaniel",
    },
    {
      image: "https://api-ninjas.com/images/dogs/bulldog.jpg",
      name: "Bulldog",
    },
  ];

  const [dogSearch, setDogSearch] = useState("");

  const handleSubmitSearchDog = useSearch(); // Using the useSearch hook as an effect

  const handleSearchDog = (e) => {
    setDogSearch(e.target.value);
  };

  return (
    <section className="hero-section">
      <SmContainer>
        <div className="hero-wrapper">
          <h1>Explore Firsthand the Different Dog Breeds</h1>
          <h3>Find information up to 200+ breeds</h3>
          <SearchBar
            onChange={handleSearchDog}
            onSubmit={(e) => handleSubmitSearchDog(e, dogSearch)}
            value={dogSearch}
          />
          <Recomendations />
          <Fade
            indicators={{}}
            arrows={false}
            canSwipe={false}
            onChange={function noRefCheck() {}}
            onStartChange={function noRefCheck() {}}
            duration={3000}
            // pauseOnHover={false}
            // transitionDuration={1000} //default
          >
            {slideshowImages.map((slideshowImage, idx) => (
              <div key={idx} className="each-slide">
                <div>
                  <img src={slideshowImage.image} alt={slideshowImage.name} />
                </div>
                {/* <p>First Slide</p> */}
              </div>
            ))}
          </Fade>
        </div>
      </SmContainer>
    </section>
  );
};

export default Home;
