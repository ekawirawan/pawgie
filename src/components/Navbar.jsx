import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { favoriteDogSelectors } from "../features/favoriteDogSlice";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const dogs = useSelector(favoriteDogSelectors.selectAll);
  const [lengthFavoriteDog, setLengthFavoriteDog] = useState(0);

  useEffect(() => {
    setLengthFavoriteDog(dogs.length);
  }, [dogs, setLengthFavoriteDog]);

  const pathRef = useRef(null);

  useEffect;
  const navs = [
    {
      name: "home",
      path: "/",
      order: 1,
      icon: (
        <svg
          className="nav-home-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M12 15L12 18"
            stroke="#1C274C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "dogs",
      path: "/dogs",
      order: 2,
      icon: (
        <svg
          className="nav-dog-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.57065 15.3763C9.15635 12.148 9.9492 10.5339 11.0904 10.1493C11.681 9.95024 12.319 9.95024 12.9096 10.1493C14.0508 10.5339 14.8437 12.148 16.4294 15.3763L17.3081 17.1653C17.7177 17.9992 17.9225 18.4162 17.971 18.7003C18.1722 19.879 17.3002 20.9654 16.1254 20.9996C15.8422 21.0079 15.4 20.8867 14.5156 20.6443C14.0101 20.5058 13.7574 20.4365 13.5047 20.3854C12.5113 20.1843 11.4887 20.1843 10.4953 20.3854C10.2426 20.4365 9.98987 20.5058 9.48445 20.6443C8.6 20.8867 8.15777 21.0079 7.87458 20.9996C6.6998 20.9654 5.82776 19.879 6.02896 18.7003C6.07746 18.4162 6.28227 17.9992 6.69189 17.1653L7.57065 15.3763Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M6.14477 5.52746C6.55659 7.15822 7.72105 8.24406 8.74566 7.95275C9.77027 7.66144 10.267 6.1033 9.85523 4.47254C9.44341 2.84178 8.27895 1.75594 7.25434 2.04725C6.22973 2.33856 5.73296 3.8967 6.14477 5.52746Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M17.8552 5.52746C17.4434 7.15822 16.279 8.24406 15.2543 7.95275C14.2297 7.66144 13.733 6.1033 14.1448 4.47254C14.5566 2.84178 15.721 1.75594 16.7457 2.04725C17.7703 2.33856 18.267 3.8967 17.8552 5.52746Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M2.20166 12.2971C2.65166 13.5021 3.70968 14.2341 4.5648 13.9319C5.41993 13.6298 5.74834 12.4079 5.29834 11.2029C4.84834 9.99785 3.79032 9.26592 2.9352 9.56808C2.08007 9.87024 1.75166 11.0921 2.20166 12.2971Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M21.7983 12.2971C21.3483 13.5021 20.2903 14.2341 19.4352 13.9319C18.5801 13.6298 18.2517 12.4079 18.7017 11.2029C19.1517 9.99785 20.2097 9.26592 21.0648 9.56808C21.9199 9.87024 22.2483 11.0921 21.7983 12.2971Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      name: "about",
      path: "about",
      order: 4,
      icon: (
        <svg
          className="nav-about-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="nav-about-icon-circle"
            cx="12"
            cy="12"
            r="10"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            d="M12 17V11"
            stroke="#1C274C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="1"
            cy="1"
            r="1"
            transform="matrix(1 0 0 -1 11 9)"
            fill="#1C274C"
          />
        </svg>
      ),
    },
  ];
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.57065 15.3763C9.15635 12.148 9.9492 10.5339 11.0904 10.1493C11.681 9.95024 12.319 9.95024 12.9096 10.1493C14.0508 10.5339 14.8437 12.148 16.4294 15.3763L17.3081 17.1653C17.7177 17.9992 17.9225 18.4162 17.971 18.7003C18.1722 19.879 17.3002 20.9654 16.1254 20.9996C15.8422 21.0079 15.4 20.8867 14.5156 20.6443C14.0101 20.5058 13.7574 20.4365 13.5047 20.3854C12.5113 20.1843 11.4887 20.1843 10.4953 20.3854C10.2426 20.4365 9.98987 20.5058 9.48445 20.6443C8.6 20.8867 8.15777 21.0079 7.87458 20.9996C6.6998 20.9654 5.82776 19.879 6.02896 18.7003C6.07746 18.4162 6.28227 17.9992 6.69189 17.1653L7.57065 15.3763Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            opacity="0.5"
            d="M6.14477 5.52746C6.55659 7.15822 7.72105 8.24406 8.74566 7.95275C9.77027 7.66144 10.267 6.1033 9.85523 4.47254C9.44341 2.84178 8.27895 1.75594 7.25434 2.04725C6.22973 2.33856 5.73296 3.8967 6.14477 5.52746Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            opacity="0.5"
            d="M17.8552 5.52746C17.4434 7.15822 16.279 8.24406 15.2543 7.95275C14.2297 7.66144 13.733 6.1033 14.1448 4.47254C14.5566 2.84178 15.721 1.75594 16.7457 2.04725C17.7703 2.33856 18.267 3.8967 17.8552 5.52746Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            opacity="0.5"
            d="M2.20166 12.2971C2.65166 13.5021 3.70968 14.2341 4.5648 13.9319C5.41993 13.6298 5.74834 12.4079 5.29834 11.2029C4.84834 9.99785 3.79032 9.26592 2.9352 9.56808C2.08007 9.87024 1.75166 11.0921 2.20166 12.2971Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
          <path
            opacity="0.5"
            d="M21.7983 12.2971C21.3483 13.5021 20.2903 14.2341 19.4352 13.9319C18.5801 13.6298 18.2517 12.4079 18.7017 11.2029C19.1517 9.99785 20.2097 9.26592 21.0648 9.56808C21.9199 9.87024 22.2483 11.0921 21.7983 12.2971Z"
            stroke="#1C274C"
            strokeWidth="1.5"
          />
        </svg>
      </NavLink>
      <ul>
        {navs.map((nav, idx) => (
          <li key={idx} style={{ order: nav.order }}>
            <NavLink to={nav.path}>
              {nav.icon}
              <span className="nav-name">{nav.name}</span>
            </NavLink>
          </li>
        ))}
        <li style={{ order: "3" }}>
          <NavLink to="/favorites" style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <svg
                className="nav-favorites-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                  strokeWidth="1.5"
                  stroke="#1C274C"
                  ref={pathRef}
                  style={{ transition: "all 0.2s" }}
                />
              </svg>
              {lengthFavoriteDog > 0 && (
                <span className="favorite-counter">{lengthFavoriteDog}</span>
              )}
            </div>
            <span className="nav-name">favorite</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
