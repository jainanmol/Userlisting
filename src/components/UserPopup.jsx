import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "react-day-picker/lib/style.css";
import "../App.css";
import moment from "moment";

class UserPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.users,
      open: this.props.open,
      onDayChange: moment(),
      isrender: true,
      data1: "",
      data2: "",
    };
  }

  handleClose = () => {
    // this.props.getUserData();
    this.setState({
      open: !this.state.open,
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      user: nextProps.users,
    });
  }

  displayUserDetails2(date) {
    let currentDate = moment(date).format("MMM DD");
    this.state.user.activity_periods.map((data) => {
      if (data.start_time.substr(0, 6) == currentDate) {
        this.setState({
          data1: data.start_time,
          data2: data.end_time,
        });
      }
    });
  }

  onDayChange = () => {
    let day = document.getElementById("date");
    this.displayUserDetails2(day.value);
  };

  render() {
    let currentDate = moment().format("MMM DD");
    return (
      <>
        <div>
          <Dialog
            onClose={this.handleClose}
            open={this.state.open}
            className="mydialog"
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title" className="dialogTitle">
              User Activity on Current Day
            </DialogTitle>
            <DialogContent className="userContent">
              <div style={{ marginBottom: "5%" }}>
                <p>Please Select a date:</p>
                <TextField
                  id="date"
                  label=""
                  type="date"
                  className="dateclass"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <input
                  type="button"
                  onClick={this.onDayChange}
                  value="Search"
                ></input>
              </div>
              {this.state.data1 == "" &&
                this.state.user.activity_periods.map((data) =>
                  data.start_time.substr(0, 6) == currentDate ? (
                    <>
                      <span className="activity">{data.start_time}</span>
                      <span>{data.end_time}</span>
                      <br></br>
                    </>
                  ) : null
                )}
              <div>
                <span className="activity2">{this.state.data1}</span>
                <span>{this.state.data2}</span>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
  }
}

export default UserPopup;
