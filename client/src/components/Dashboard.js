import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link
          to="/surveys/new"
          className="btn btn-primary btn-lg float-right"
          type="button"
          style={{ margin: "2%" }}
        >
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
