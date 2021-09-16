import React, { Component } from "react";
import InputDate from "elements/Form/InputDate";
import Breadcrumb from "elements/Breadcrumb";
export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
    // value: ""
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const breadcrumbList = [
      { pageTitle: "Web", pageHref: "" },
      { pageTitle: "Dandi", pageHref: "" }
    ];
    console.log(this.state);
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
            <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
