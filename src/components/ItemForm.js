import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit, newItemName, newItemCategory, itemName, itemCategory }) {

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };
  
  return (
    <form className="NewItem" onSubmit={(event) => {onItemFormSubmit(newItem); event.preventDefault();}}>
      <label>
        Name:
        <input
         type="text"
          name="name"
          value={itemName}
          onChange={newItemName}
          />
      </label>

      <label>
        Category:
        <select name="category" onChange={newItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
