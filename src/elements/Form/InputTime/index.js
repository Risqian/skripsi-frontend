import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import DatePicker from "react-datepicker";

import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/icon-calendar.svg";


export default function Time(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const [startDate, setStartDate] = useState(
    new Date()
    // setHours(setMinutes(new Date(), 30), 16)
  );

  const dateChange = (date) => {
    setStartDate(date)
  }

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

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

