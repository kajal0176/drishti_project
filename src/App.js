import React, { useState } from "react";
import Navbar from "./component/navbar";
import ItemList from "./component/itemList";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleSort = (term) => {
    setSelectedOption(term);
  };
  return (
    <div className="App">
      <Navbar onSearch={handleSearch} onSort={handleSort} />
      <main>
        <ItemList
          searchTerm={searchTerm}
          selectedOption={selectedOption && selectedOption.name}
        />
      </main>
      {console.log(selectedOption && selectedOption.name)}
    </div>
  );
}

export default App;
