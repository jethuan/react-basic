import { Component } from "react";

class AddComponent extends Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    console.log(">>> check data input: ", this.state);
    this.props.addNewJob2({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <div>
          <label>Job tittle</label>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChangeTitleJob}
          ></input>
          <p>Bạn đã nhập vào {this.state.title}</p>
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            value={this.state.salary}
            onChange={this.handleChangeLastName}
          ></input>
        </div>
        <div>
          <button onClick={this.handleSubmit}>Login</button>
        </div>
      </form>
    );
  }
}
export default AddComponent;
