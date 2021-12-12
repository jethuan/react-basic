import { Component } from "react";
import "./demo.css";
export default class ShowHideJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  show = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    let { job } = this.props;
    let { show } = this.state;
    return (
      <>
        {show === false ? (
          <div>
            <button className="btn-show" onClick={this.show}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div>
              {job.map((items, index) => {
                return (
                  <div key={items.id}>
                    {items.id} - {items.title} - {items.salary}
                  </div>
                );
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
