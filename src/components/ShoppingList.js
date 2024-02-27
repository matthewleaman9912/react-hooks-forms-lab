import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";



function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const [array, setArray] = useState(items)

 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange (event) {
    setSearch(event.target.value);
  }

  function newItemName(event) {
    setItemName(event.target.value)
  }

  function newItemCategory(event) {
    setItemCategory(event.target.value);
  }

  function onItemFormSubmit(item) {
    setArray([...array, item]);
  }
 


  const itemsToDisplay = array.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;
    if (search !== "") return item.name.includes(search);
    return item.category === selectedCategory;
  });
 
 
 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} newItemCategory={newItemCategory} newItemName={newItemName} itemCategory={itemCategory} itemName={itemName} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
