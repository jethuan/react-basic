import react, { Component } from "react";

// export default class ChildComponent extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props);
//     let arr = this.props.arrStudent;
//     return (
//       <>
//         <div>
//           <p>tên tôi là : {this.props.name}</p>
//           <p>tên tôi là : {this.props.age}</p>
//           <p>
//             tên tôi là :{" "}
//             {arr.map((items, index) => {
//               return (
//                 <div key={items.id}>
//                   {items.id} - {items.name} - {items.age}
//                 </div>
//               );
//             })}
//           </p>
//         </div>
//         <div></div>
//       </>
//     );
//   }
// }

// khai báo function thay vì dùng class. function chỉ nên dùng với hook

const ChildComponent = (props) => {
  console.log("In ra props", props);
  let { arrStudent } = props;

  return (
    <div>
      {arrStudent.map((items, index) => {
        return (
          <div key={items.id}>
            {items.id} - {items.name} - {items.age}
          </div>
        );
      })}
    </div>
  );
};

export default ChildComponent;
