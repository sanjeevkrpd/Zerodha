import React from "react";

const Watchlist = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy , bse , nifty fut weekly , gold mcx "
          className="search"
        />
        <span className="counts">9 / 50 </span>
      </div>
    </div>
  );
};

export default Watchlist;
