import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }
  addTodo = (event) => {
    event.preventDefault();

    const data = event.target,
      newTodo = {
        taskTitle: data.taskTitle.value,
        date: data.date.value,
      };

    if (newTodo.taskTitle !== "" && newTodo.date !== "") {
      this.state.todoList.push(newTodo);
      this.setState({
        todoList: this.state.todoList,
      });
    }
  };

  deleteTodo = (event) => {
    const cloned = new Array(...this.state.todoList);
    cloned.splice(event.target.value, 1);
    this.setState({
      todoList: cloned,
    });
  };
  handleEditing = () => {
    console.log("edit mode activated");
  };

  editTodo = (e) => {
    const newTodo = prompt("Let's make something changes");

    const cloned = new Array(...this.state.todoList)
    for(let i = 0; i < cloned.length; i++) {
      if (i === Number(e.target.value)) {
        cloned[i].taskTitle = newTodo;
        break;
      }
    }
    this.setState({
      todoList: cloned,
    });
  };

  render() {
    return (
      <div className=" App container">
        <div className="App-header  ">
          <Form onSubmit={this.addTodo}>
            <Form.Group controlId="">
              <Form.Label>Task Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter A Task"
                name="taskTitle"
              />
            </Form.Group>
            <Form.Group controlId="">
              <Form.Label>Task date:</Form.Label>
              <Form.Control type="date" placeholder="mm/dd/yyyy" name="date" />
            </Form.Group>
            <Button type="submit" className="btn btn-success">
              Add+
            </Button>
          </Form>
        </div>

        {this.state.todoList.map((task, index) => {
          return (
            <div key={index} className="task-list" onDoubleClick={this.handleEditing}>
              <div key={index} className="tk">
                {task.taskTitle} , Date: {task.date}
                <span>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={this.deleteTodo}
                    value={index}
                    className="btnn "
                    size="sm"
                  >
                    Delete
                  </Button>
                  <Button
                    type="button"
                    variant="warning"
                    onClick={this.editTodo}
                    value={index}
                    className="btnn"
                    size="sm"
                  >
                    Edit
                  </Button>
                </span>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
