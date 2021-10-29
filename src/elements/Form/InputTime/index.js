import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import TimeRange from 'react-time-range';
import moment from 'moment';

import "./index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/icon-calendar.svg";

export default function Time(props) {
  const { value, placeholder, name } = props;

  const returnFunction = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  // const returnFunctionStart = event => {
  //   setState({ startTime: event.startTime });
  // };

  // const returnFunctionEnd = event => {
  //   setState({ endTime: event.endTime });
  // };

  return (
    <TimeRange
      // onStartTimeChange={returnFunctionStart}
      // onEndTimeChange={returnFunctionEnd}
      startMoment={value.startTime}
      endMoment={value.endTime}
      onChange={returnFunction}
    />
  );
}

Time.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  outerClassName: propTypes.string,
};
