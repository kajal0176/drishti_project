import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import "./navbar.css";

const Navbar = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { name: "name", code: "NM" },
    { name: "Price", code: "PR" },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
    onSort(event.target.value);
  };
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">Products</h1>
      <div className="nav-item">
        <div className="search-bar">
          <InputText
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-8rem sm:w-auto"
          />
        </div>

        <div className="sort-dropdown">
          <Dropdown
            value={selectedOption}
            onChange={handleSortChange}
            options={options}
            optionLabel="name"
            showClear
            placeholder="Sort By"
            className=" md:w-14rem"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
