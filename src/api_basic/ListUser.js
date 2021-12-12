import react, { Component } from "react";
import "./ListUser.scss";
import { withRouter } from "react-router";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
    };
  }

  async componentDidMount() {
    let response = await fetch("https://reqres.in/api/users?page=2");
    let data = await response.json();
    this.setState({
      listUser: data && data.data ? data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    console.log("check ", this.props);
    this.props.history.push(`/users/${user.id}`);
  };

  render() {
    let { listUser } = this.state;
    const mystyle = {
      color: "white",
    };
    return (
      <>
        <p style={mystyle}>User Information</p>
        <table className="table-container">
          <thead>
            <tr>
              <td>ID</td>
              <td>Full name</td>
            </tr>
          </thead>
          <tbody>
            {listUser &&
              listUser.length > 0 &&
              listUser.map((item, index) => {
                return (
                  <tr
                    key={item.id}
                    onClick={() => this.handleViewDetailUser(item)}
                  >
                    <td>{index + 1} </td>
                    <td>
                      {item.first_name} <></>
                      {item.last_name}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}
export default withRouter(ListUser);
