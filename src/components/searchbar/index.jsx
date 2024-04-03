import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        className="w-96 max-[399px]:w-52 input input-bordered rounded-3xl max-md:w-64 max-sm:w-52 max-[399px]:w-40"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
