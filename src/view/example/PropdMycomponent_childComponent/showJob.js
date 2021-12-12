import { Component } from "react";
import "./job-form.scss";
export default class ShowJob extends Component {
  constructor(props) {
    super(props);
  }
  HandleOncliceDeleteJob = (jobs) => {
    //console.log("in ra current job", jobs);
    this.props.deleteAJob(jobs);
  };

  render() {
    let { showJob } = this.props;
    return (
      <div>
        {showJob.map((items, index) => {
          return (
            <div key={items.id} className="show-job">
              {index + 1} - {items.title} - {items.salary} <></>{" "}
              <span
                onClick={() => {
                  this.HandleOncliceDeleteJob(items);
                }}
              >
                x
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
