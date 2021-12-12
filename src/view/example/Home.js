import react, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  handelDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };
  handelAddUser = () => {
   
    this.props.addusserRedux();
  };
  render() {
    let listUser = this.props.dataRedux;
    return (
      <div className="container">
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => {
            return (
              <div key={item.id}>
                {index + 1}- {item.name} &nbsp;&nbsp;&nbsp;
                <span
                  onClick={() => {
                    this.handelDeleteUser(item);
                  }}
                >
                  x
                </span>
                &nbsp;&nbsp;&nbsp;
              </div>
            );
          })}
        <button
          onClick={() => {
            this.handelAddUser();
          }}
        >
          Add user
        </button>
      </div>
    );
  }
}

//ACTION

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE_USER",
        payload: userDelete,
      }),
    addusserRedux: () => {
      dispatch({
        type: "ADD_USER",
      });
    },
  };
};

//sợi dây liên kết giữa COM và redux, state trên là của redux
//dataRedux là  biến mình tạo ra, tên gì cũng được
export default connect(mapStateToProps, mapDispatchToProps)(Home);
