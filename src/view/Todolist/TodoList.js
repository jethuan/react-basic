import react, { Component } from "react";
import Addtodo from "./Addtodo";
import { toast } from "react-toastify";
import "./TodoList.scss";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListTodo: [
        { id: " Course 1", title: "Javascript" },
        { id: "Course 2", title: "NodeJs" },
        { id: "Course 3", title: "HMT5" },
      ],
      editTodo: {}, //đặt 1 editTodo, khi nhấn vào nút edit thì gắn todo và editTodo
    };
  }

  addNewTodo = (todo) => {
    this.setState({
      ListTodo: [...this.state.ListTodo, todo], //add todo vao Listtodo
    });
    toast.success("the list was added !");
  };

  handleDelete = (todo) => {
    let todoCurrent = this.state.ListTodo;
    todoCurrent = todoCurrent.filter((item) => {
      return item.id !== todo.id; // tra ve nhung item.id # todo.id. khi click vao se nhận biết todo.id đó
    });
    console.log("in ra todo.id :", todo.id);
    console.log("Log item .id !== todo.id", todoCurrent);
    this.setState({
      ListTodo: todoCurrent,
    });
    toast.success("the list was removed succeed !");
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  handleEdittodo = (todo) => {
    let { editTodo, ListTodo } = this.state;
    let isObjEmpty = Object.keys(editTodo).length === 0; //dùng cho Save
    //Save
    if (isObjEmpty === false && editTodo.id === todo.id) {
      let listTodoCopy = [...ListTodo];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objIndex].title = editTodo.title;
      this.setState({
        ListTodo: listTodoCopy,
        editTodo: {},
      });
      toast.success("the list was saved succeed !");
      return;
    }
    this.setState({
      editTodo: todo,
    });
    console.log("in ra editTodo xem có gì", this.state.editTodo);
  };

  render() {
    let { ListTodo, editTodo } = this.state;
    let isObjEmpty = Object.keys(editTodo).length === 0;
    return (
      <div className="listTodo-container">
        <Addtodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {ListTodo &&
            ListTodo.length > 0 &&
            ListTodo.map((item, index) => {
              return (
                <div className="todo-child">
                  {isObjEmpty === true ? (
                    <div className="title" key={item.id}>
                      {index + 1} - {item.title}
                    </div>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -
                          <input
                            className="btn-edit"
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnchangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <div className="btn">
                    <button
                      value={editTodo.title}
                      onClick={() => this.handleEdittodo(item)}
                    >
                      {isObjEmpty === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button onClick={() => this.handleDelete(item)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
