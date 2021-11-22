import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import DatePicker from "react-datepicker";

import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

import iconCalendar from "assets/images/icons/icon-calendar.svg";


export default function Time(props) {
  const { value, name } = props;
  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value,
        name: name,
      },
    };
    props.onChange(target);
  };

  const refDate = useRef(null);

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={iconCalendar} alt="icon calendar" />
          </span>
        </div>
        <DatePicker
          popperPlacement="bottom-end"
          className="form-control"
          style={{ display: 'flex' }}
          selected={value}
          onChange={datePickerChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy HH:mm"
          timeFormat="HH:mm"
        />
      </div>
    </div>
  );
}

Time.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};

