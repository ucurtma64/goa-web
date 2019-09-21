import _ from 'lodash';
import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import { Button } from 'react-bootstrap';

class SurveyForm extends Component {
    renderFields(errors, status, touched) {
        return _.map(formFields, ({ label, name }) => {
            return (
                <div className="form-group" key={name}>
                    <label className="text-light" for={name}>{label}</label>
                    <Field rows="2" component="textarea" name={name} type="text" className={'form-control' + (errors[{name}] && touched[{name}] ? ' is-invalid' : '')} placeholder={label}/>
                    <ErrorMessage name={name} className="invalid-feedback" render={msg => <div className="text-danger">{msg}</div>} />
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
                    <Form className="w-75 d-block mx-auto">
                        { this.renderFields(errors, status, touched) }
                        
                        <div className="form-group " key="buttons" style={{ margin: '2rem' }}>
                            <Button className="float-right" variant="primary" type="submit">Submit</Button>
                            <Button className="" style={{ marginLeft: '2rem' }} variant="secondary" type="reset">Reset</Button>
                            <Button className="float-left" variant="secondary" as={Link} to="/surveys">Cancel</Button>
                        </div>
                    </Form>
                    
                )}
            />
        )
    }
}

export default SurveyForm;