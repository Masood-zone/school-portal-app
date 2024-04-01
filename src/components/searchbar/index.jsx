import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        className="w-96 max-[399px]:w-52 input input-bordered rounded-3xl"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
