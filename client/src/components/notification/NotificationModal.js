import $ from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class NotificationModal extends Component {
  componentDidUpdate() {
    $("#notificationModal").modal("show");
  }

  render() {
    switch (this.props.notificationModal) {
      case null:
        return <div />;
      case false:
        return <div />;
      default:
        return (
          <div
            class="modal fade"
            id="notificationModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">
                    {this.props.notificationModal.type}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class={"modal-body text-center"}>
                  {this.props.notificationModal.message}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
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

export default connect(mapStateToProps, actions)(NotificationModal);
