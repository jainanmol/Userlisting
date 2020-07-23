import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

class datePicker extends React.Component {
  onDayChange = (day) => {
    console.log(day);
    this.setState({
      day,
    });
  };

  render() {
    return (
      <div>
        <p>Please type a day:</p>
        <DayPickerInput onDayChange={this.onDayChange} />
      </div>
    );
  }
}

export default datePicker;
