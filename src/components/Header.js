import React from "react";
import Search from "./Search";

function Header({searchedValueUpdate}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchedValueUpdate={searchedValueUpdate}/>
    </header>
  );
}

export default Header;
