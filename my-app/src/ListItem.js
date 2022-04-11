import React from "react";
import "./ListItem.css";

function ListItems() {
 
  this.state.todoList.map((item,index) => {
    return (
      <div className="list">
      <p> {item.taskTitle}, Date: {item.date} </p>
      <button type="button" className="btn btn-danger" value={index} >Delete</button>
      </div>
    );
  });

}

export default ListItems;
