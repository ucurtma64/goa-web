import React, { Component } from "react";

class HorizontalStepper extends Component {
  constructor(props) {
    super(props);

    this.state = { currentStage: 0 };
  }

  gotoNextStage() {
    var { currentStage } = this.state;

    const { stages } = this.props;

    if (currentStage === stages.lenght) return;

    currentStage++;

    this.setState({ currentStage });
  }

  gotoPreviousStage() {
    var { currentStage } = this.state;

    const { stages } = this.props;

    if (currentStage === stages.lenght) return;

    currentStage--;

    this.setState({ currentStage });
  }

  gotoStage = stage => {
    stage = stage - 1;
    this.setState({ currentStage: stage });
  };

  renderStages() {
    var steps = [];

    for (var i = 0; i < this.props.stages.length; i++) {
      if (i < this.state.currentStage) {
        steps[i] = (
          <div key={i} className="col mdl-stepper-step step-done">
            <div className="mdl-stepper-circle">
              <span>{i + 1}</span>
            </div>
            <div className="mdl-stepper-title">
              {this.props.stages[i].title}
            </div>
            {this.props.stages[i].optional ? (
              <div className="mdl-stepper-optional">
                {this.props.stages[i].optional}
              </div>
            ) : (
              ""
            )}
            <div className="mdl-stepper-bar-left"></div>
            <div className="mdl-stepper-bar-right"></div>
          </div>
        );
      } else if (i > this.state.currentStage) {
        steps[i] = (
          <div key={i} className="col mdl-stepper-step">
            <div className="mdl-stepper-circle">
              <span>{i + 1}</span>
            </div>
            <div className="mdl-stepper-title">
              {this.props.stages[i].title}
            </div>
            {this.props.stages[i].optional ? (
              <div className="mdl-stepper-optional">
                {this.props.stages[i].optional}
              </div>
            ) : (
              ""
            )}
            <div className="mdl-stepper-bar-left"></div>
            <div className="mdl-stepper-bar-right"></div>
          </div>
        );
      } else {
        steps[i] = (
          <div key={i} className="col mdl-stepper-step active-step">
            <div className="mdl-stepper-circle">
              <span>{i + 1}</span>
            </div>
            <div className="mdl-stepper-title">
              {this.props.stages[i].title}
            </div>
            {this.props.stages[i].optional ? (
              <div className="mdl-stepper-optional">
                {this.props.stages[i].optional}
              </div>
            ) : (
              ""
            )}
            <div className="mdl-stepper-bar-left"></div>
            <div className="mdl-stepper-bar-right"></div>
          </div>
        );
      }
    }

    return steps;
  }

  render() {
    return (
      <div className="container">
        <div className="mdl-card__supporting-text">
          <div className="row mdl-stepper-horizontal-alternative">
            {this.renderStages()}
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalStepper;
