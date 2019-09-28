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
          <div key={i} className="mdl-stepper-step step-done">
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
          <div key={i} className="mdl-stepper-step">
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
          <div key={i} className="mdl-stepper-step active-step">
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
      <>
        <style type="text/css">
          {`
                .mdl-card {
                  width: 60rem;
                  min-height: 0;
                  margin: 10px auto;
                }
                
                .mdl-card__supporting-text {
                  width: 100%;
                  padding: 0;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step {
                  width: 25%;
                  /* 100 / no_of_steps */
                }
                
                
                /* Begin actual mdl-stepper css styles */
                
                .mdl-stepper-horizontal-alternative {
                  display: table;
                  width: 100%;
                  margin: 0 auto;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step {
                  display: table-cell;
                  position: relative;
                  padding: 1.6rem;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:hover,
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:active {
                  background-color: rgba(255, 255, 255, .06);
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:active {
                  border-radius: 15% / 75%;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:first-child:active {
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:last-child:active {
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:hover .mdl-stepper-circle {
                  background-color: #757575;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:first-child .mdl-stepper-bar-left,
                .mdl-stepper-horizontal-alternative .mdl-stepper-step:last-child .mdl-stepper-bar-right {
                  display: none;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-circle {
                  width: 3rem;
                  height: 3rem;
                  margin: 0 auto;
                  background-color: #9E9E9E;
                  border-radius: 50%;
                  text-align: center;
                  line-height: 2em;
                  font-size: 1.5rem;
                  color: white;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step.active-step .mdl-stepper-circle {
                  background-color: #3498db;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step.step-done .mdl-stepper-circle {
                    background-color:  #2ecc71;
                }

                .mdl-stepper-horizontal-alternative .mdl-stepper-step.editable-step .mdl-stepper-circle {
                    background-color: #f1c40f;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step.editable-step .mdl-stepper-circle {
                  -moz-transform: scaleX(-1);
                  /* Gecko */
                  -o-transform: scaleX(-1);
                  /* Opera */
                  -webkit-transform: scaleX(-1);
                  /* Webkit */
                  transform: scaleX(-1);
                  /* Standard */
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-title {
                  margin-top: 0.1rem;
                  font-size: 1.4rem;
                  font-weight: normal;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-title,
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-optional {
                  text-align: center;
                  color: rgba(255, 255, 255, .48);
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step.active-step .mdl-stepper-title {
                  font-weight: 500;
                  color: rgba(255, 255, 255, .92);
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step.active-step.step-done .mdl-stepper-title,
                .mdl-stepper-horizontal-alternative .mdl-stepper-step.active-step.editable-step .mdl-stepper-title {
                  font-weight: 300;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-optional {
                  font-size: 1rem;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step.active-step .mdl-stepper-optional {
                  color: rgba(255, 255, 255, .64);
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-bar-left,
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-bar-right {
                  position: absolute;
                  top: 3rem;
                  height: 1px;
                  border-top: 1px solid #BDBDBD;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-bar-right {
                  right: 0;
                  left: 55%;
                  margin-left: 20px;
                }
                
                .mdl-stepper-horizontal-alternative .mdl-stepper-step .mdl-stepper-bar-left {
                  left: 0;
                  right: 55%;
                  margin-right: 20px;
                }
                `}
        </style>

        <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
            <div className="mdl-stepper-horizontal-alternative">
              {this.renderStages()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HorizontalStepper;
