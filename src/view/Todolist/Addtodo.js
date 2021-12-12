import react, { Component } from "react";
import { toast } from "react-toastify";
export default class Addtodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  onChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  addTodolist = (event) => {
    event.preventDefault();
    if (!this.state.title) {
      toast.error("you are missing the field!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    console.log("log ra thu xem", this.state);
    this.setState({
      title: "",
    }); // nayf laf gans laij roong khi add xong
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input type="text" value={title} onChange={this.onChangeTitle} />
        <button type="button" onClick={this.addTodolist}>
          Add
        </button>
      </div>
    );
  }
}
