import React from "react";

import Button from "../../Components/Button.js";
import TextInput from "../../Components/TextInput.js";

//Container for the ssearch input and search button.
const SeacrhBar = () => {
  return (
    <div className="movie-search">
      <TextInput
        type="text"
        name="search-criteria"
        placeHolder="What do you want to watch?"
      />
      <Button caption="Search" onClick={onSearch} />
    </div>
  );
};

//func hoisted above the class when script is compiled.
const onSearch = (e) => {
  e.preventDefault();
};

export default SeacrhBar;
