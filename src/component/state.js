import { Component } from "react";
import LoginForm from "./LoginForm";

export default class Wcom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      count: 0,
    };
  }
  countUp = () => {
    // var c = this.state.count;
    // c++;
    // this.setState({ count: c });

    //cách 2: dùng hàm setState để return về 1 đối tượng
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <p>
          welcome {this.props.user.id} - {this.props.user.name}
        </p>
        <p>{this.state.text}</p>
        <button
          onClick={() => {
            this.setState({
              text: "changed by me",
            });
          }}
        >
          Change Text
        </button>
        <button onClick={this.countUp}>Count up {this.state.count}</button>

        {this.state.count > 0 && <LoginForm />}
      </div>
    );
  }
}
// cập nhật các trạng thái của components
//setState cũng là async

function Count() {}
