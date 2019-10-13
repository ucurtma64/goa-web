import $ from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class NotificationModal extends Component {
  componentDidUpdate() {
    $("#exampleModalCenter").modal("show");
  }

  render() {
    console.log(this.props.notificationModal);

    switch (this.props.notificationModal) {
      case null:
        return <div />;
      case false:
        return <div />;
      default:
        const alertType = "alert-" + this.props.notificationModal.type; //bootstrap alert, eight required contextual classes to define color

        return (
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className={"modal-header " + alertType}>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className={"modal-body text-center " + alertType}>
                  {this.props.notificationModal.message}
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

function mapStateToProps({ notificationModal }) {
  return { notificationModal };
}

export default connect(
  mapStateToProps,
  actions
)(NotificationModal);
