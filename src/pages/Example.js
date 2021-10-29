import React, { Component } from "react";
import InputDate from "elements/Form/InputDate";
import InputTime from "elements/Form/InputTime";
import Breadcrumb from "elements/Breadcrumb";
import moment from 'moment';
export default class Example extends Component {
  state = {
    value: {
      // startDate: new Date(),
      // endDate: new Date(),
      // key: "selection"
      startTime: moment(),
      endTime: moment(),
      key: "selection"
    }
    // value: ""
  };

  returnFunctionStart = event => {
    this.setState({ startTime: event.startTime });
  };

  returnFunctionEnd = event => {
    this.setState({ endTime: event.endTime });
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
            {/* <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            <InputTime
              onChange={this.handleChange}
              onStartTimeChange={this.returnFunctionStart}
              onEndTimeChange={this.returnFunctionEnd}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
