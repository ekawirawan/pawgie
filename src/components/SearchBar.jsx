const SearchBar = (props) => {
  const { onSubmit, value, onChange, isDisable } = props;
  return (
    <form onSubmit={onSubmit} className="search-bar">
      <label htmlFor="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
      <input
        autoComplete="none"
        value={value}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="Search for the dog breed..."
        id="search"
        disabled={isDisable}
        style={isDisable ? { cursor: "not-allowed" } : {}}
      />
      <button className="btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
