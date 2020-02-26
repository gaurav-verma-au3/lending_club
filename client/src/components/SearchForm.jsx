import React from "react";
import { FaSearch } from "react-icons/fa";
import { API_ORIGIN } from "../config";

const SearchForm = ({ setSearchResults, setStatus }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setSearchResults(null);
    setStatus("loading");
    const member_id = e.target.search.value;

    const url = `${API_ORIGIN}/search/${member_id}`;

    fetch(url)
      .then(data => data.json())
      .then(result => {
        setSearchResults(result);
        setStatus(null);
      });
  };

  return (
    <form className="form-inline" onSubmit={e => handleSubmit(e)}>
      <input
        className="form-control rounded-0 border-1"
        type="search"
        name="search"
        placeholder="Search by Member Id..."
      />
      <button className="btn btn-light rounded-0" type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchForm;
