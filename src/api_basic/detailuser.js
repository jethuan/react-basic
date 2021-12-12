import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
class DetailUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let response = await axios(`https://reqres.in/api/users/${id}`);
      let { data } = await response;

      console.log("check response", data);
      this.setState({
        user: data && data.data ? data.data : {},
      });
    }
  }
  handleBack = () => {
    this.props.history.push(`/users`);
  };
  render() {
    let { user } = this.state;
    let isObjEmpty = Object.keys(user).length === 0;
    return (
      <>
        {isObjEmpty == false && (
          <>
            <div>
              {" "}
              User name : {user.first_name} - {user.last_name}
            </div>
            <div> Email : {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBack()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
