import { Component } from "react";

export default class ShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showJob: false,
    };
  }
  show = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {showJob === false ? (
          <div>
            <button onClick={this.show}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {arrJobs.map((items, index) => {
                if (items.salary > 2) {
                  return (
                    <div key={items.id}>
                      {items.id} - {items.title} - {items.salary}
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={this.show}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// khai báo function thay vì dùng class. function chỉ nên dùng với hook

// const Conditional_Output = (props) => {
//   console.log("In ra props", props);
//   let { arrStudent } = props;

//   return (
//     <div>
//       {arrStudent.map((items, index) => {
//         if (items.salary > 2) {
//           return (
//             <div key={items.id}>
//               {items.id} - {items.name} - {items.salary}
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// };

//export default ShowHide;
