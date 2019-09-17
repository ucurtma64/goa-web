import _ from 'lodash';
import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

/*class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    { this.renderFields() }

                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>

                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}*/

class SurveyForm extends Component {
    renderFields(errors, status, touched) {
        return _.map(formFields, ({ label, name }) => {
            return (
                <div className="form-group" key={name}>
                    <label htmlFor={name}>{label}</label>
                    <Field name={name} type="text" className={'form-control' + (errors[{name}] && touched[{name}] ? ' is-invalid' : '')} />
                    <ErrorMessage name={name} component="div" className="invalid-feedback" />
                </div>
            )
        })
    }

    render() {
        const initialValuesMap = {};
        const validationMap = {}

        _.map(formFields, ({ name, yupValidation }) => {
            initialValuesMap[name] = this.props.formValues[name];
            validationMap[name] = yupValidation;
        }); //load key - value pairs to validationMap from formFields

        return (
            <Formik
                initialValues={initialValuesMap}
                validationSchema={Yup.object().shape(validationMap)}
                onSubmit={fields => {
                    this.props.onSurveySubmit(fields);
                }}
                render={({ errors, status, touched }) => (
                    <Form >
                        { this.renderFields(errors, status, touched) }
                        <div className="form-group" key="buttons">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <Link to="/surveys" className="btn btn-secondary">Cancel</Link>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default SurveyForm;