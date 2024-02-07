import { Link } from "react-router-dom";

const Recomendations = () => {
  const recomendations = [
    "bulldog",
    "american",
    "japan",
    "australian",
    "basset",
  ];

  return (
    <ul className="search-recomendation">
      {recomendations.map((recomendation, idx) => (
        <li key={idx}>
          <Link to={`/dogs/${recomendation}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{recomendation}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Recomendations;