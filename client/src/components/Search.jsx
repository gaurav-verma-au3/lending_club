import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import LoadingSpinner from "./LoadingSpinner";
const Search = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex py-3 justify-content-end">
          <SearchForm
            setSearchResults={setSearchResults}
            setStatus={setStatus}
          />
        </div>
      </div>

      {status ? <LoadingSpinner /> : null}
      <div className="row mt-2">
        {searchResults ? (
          searchResults.map(val => {
            return (
              <Link className="col-12 text-center alert alert-dark" to={`user/${val}`}>
                {val}
              </Link>
            );
          })
        ) : (
          <h5 className="text-center my-3">Search results empty</h5>
        )}
      </div>
    </div>
  );
};

export default Search;
