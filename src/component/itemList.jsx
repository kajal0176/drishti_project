import React, { useState, useEffect } from "react";
import "./itemList.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useGetProductsQuery } from "../API/apiSlice";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";

const DEFAULT_IMAGE = "./defaultImage.png";

const ItemList = ({ searchTerm, selectedOption }) => {
  const { data, error, isLoading, isError } = useGetProductsQuery();
  const [filteredItems, setFilteredItems] = useState([]);

  // Filter items whenever `data` or `searchTerm` changes
  useEffect(() => {
    if (data?.data?.products) {
      let items = data.data.products.filter(
        (item) =>
          item.name &&
          item.price &&
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (selectedOption === "name") {
        items = items.sort((a, b) => a.name.localeCompare(b.name));
      } else if (selectedOption === "Price") {
        items = items.sort((a, b) => a.price - b.price);
      }
      setFilteredItems(items);
    }
  }, [data, searchTerm, selectedOption]);

  const handleImageError = (e) => {
    e.target.src = DEFAULT_IMAGE;
  };

  return (
    <div className="item-list">
      {isLoading && <ProgressSpinner aria-label="Loading" />}
      {isError && (
        <Message
          severity="error"
          text="Unable to load the items. Please try refreshing the page."
        />
      )}
      {filteredItems.length > 0
        ? filteredItems.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-images">
                <img
                  src={item.images.length ? item.images[0] : DEFAULT_IMAGE}
                  alt={item.name || "Default product image"}
                  className="item-image"
                  onError={handleImageError}
                />
              </div>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">{"INR " + item.price}</p>
              </div>
            </div>
          ))
        : !isLoading && !isError && <p>No items found.</p>}
    </div>
  );
};

export default ItemList;
