import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../App.css";
import moment from "moment";
import Example from "./datePicker";

class UserPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.users,
      open: this.props.open,
    };
  }
  onDayChange = (day) => {
    // console.log();
    console.log(moment(day).format("MMM DD Y"));
    this.setState({
      day: moment(day).format("MMM DD Y"),
    });
  };
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

  displayUserDetails() {
    let currentDate = moment().format("MMM DD");
    this.state.user.activity_periods.map((data) => {
      if (data.start_time.substr(0, 6) === currentDate)
        return (
          <>
            <span className="activity">{data.start_time}</span>
            <span>{data.end_time}</span>
            <br></br>
          </>
        );
    });
  }

  render() {
    let currentDate = moment().format("MMM DD");
    // console.log('this.props.users',this.props.users);
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
              <Example />
              {/* {this.displayUserDetails()} */}
              {this.state.user.activity_periods.map((data) =>
                data.start_time.substr(0, 6) === currentDate ? (
                  <>
                    <span className="activity">{data.start_time}</span>
                    <span>{data.end_time}</span>
                    <br></br>
                  </>
                ) : null
              )}
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
