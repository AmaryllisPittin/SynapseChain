const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Rechercher une crypto..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  