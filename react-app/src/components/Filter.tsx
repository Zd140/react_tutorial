import React from "react";
import "../App.css";

function Filter() {
  const myItems = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  //maping the items in the myItems array to a list using a map() method
  const list = myItems.map((items) => <p>{items}</p>);

  return (
    <div className="filter">
      <label htmlFor="">
        Search : <input type="text" />{" "}
        <p>{list}</p>
      </label>

      
    </div>
  );
}

export default Filter;
