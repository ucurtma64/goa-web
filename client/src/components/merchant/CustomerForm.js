import _ from 'lodash';
import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import products from './products';

class CustomerForm extends Component {
    renderProductInfo() {
        const result = products.find(product => {
            return product.id === this.props.formValues.productId
          })

        return (<div className="pricing" style={{ margin: '1rem' }}>
            <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{result.label}</h5>
                <h6 className="card-price text-center">${result.price}<span className="period">/credits</span></h6>
                <hr/>

                {result.description}
            </div>
            </div>
        </div>)
    }

    render() {
        const initialValuesMap = {
            title: this.props.formValues.title,
            subject: this.props.formValues.subject,
            body: this.props.formValues.body,
            recipients: this.props.formValues.recipients
        };

        return (
            <>
            <style type="text/css">
                {`
                .pricing .card {
                border: none;
                border-radius: 1rem;
                transition: all 0.2s;
                box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
                }
                
                .pricing hr {
                margin: 1.5rem 0;
                }

                .pricing .card-title {
                margin: 0.5rem 0;
                font-size: 0.9rem;
                letter-spacing: .1rem;
                font-weight: bold;
                }
                
                .pricing .card-price {
                font-size: 3rem;
                margin: 0;
                }
                
                .pricing .card-price .period {
                font-size: 0.8rem;
                }
                
                .pricing ul li {
                margin-bottom: 1rem;
                }
                
                .pricing .text-muted {
                opacity: 0.7;
                }
                
                .pricing .btn {
                font-size: 80%;
                border-radius: 5rem;
                letter-spacing: .1rem;
                font-weight: bold;
                padding: 1rem;
                opacity: 0.7;
                transition: all 0.2s;
                }
                
                /* Hover Effects on Card */
                
                @media (min-width: 992px) {
                .pricing .card:hover {
                    margin-top: -.25rem;
                    margin-bottom: .25rem;
                    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
                }
                .pricing .card:hover .btn {
                    opacity: 1;
                }
                `}
            </style>

            <div className="container">
                <div className="row">
                    <Formik className="col-6"
                        initialValues={initialValuesMap}
                        validationSchema={Yup.object().shape({
                            title: Yup.string().required('Title is required'),
                            subject: Yup.string().required('Subject is required'),
                            body: Yup.string().min(6, 'Body must be at least 6 characters').required('Body is required'),
                            recipients: Yup.string().email('Email is invalid').required('Email is required')
                        })}
                        onSubmit={fields => {
                            this.props.onSurveySubmit(fields);
                        }}
                        render={({ errors, status, touched }) => (
                            <Form className="d-block mx-auto">
                                <div className="form-row">
                                    <div className="form-group col" key="title">
                                        <label className="text-light" htmlFor="title">Survey Title</label>
                                        <Field rows="1" component="textarea" name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} placeholder="Survey Title"/>
                                        <ErrorMessage name="title" className="invalid-feedback" render={msg => <div className="text-danger">{msg}</div>} />
                                    </div>

                                    <div className="form-group col" key="subject">
                                        <label className="text-light" htmlFor="subject">Subject Line</label>
                                        <Field rows="1" component="textarea" name="subject" type="text" className={'form-control' + (errors.subject && touched.subject ? ' is-invalid' : '')} placeholder="Subject Line"/>
                                        <ErrorMessage name="subject" className="invalid-feedback" render={msg => <div className="text-danger">{msg}</div>} />
                                    </div>
                                </div>
                                <div className="form-group" key="body">
                                    <label className="text-light" htmlFor="body">Email Body</label>
                                    <Field rows="1" component="textarea" name="body" type="text" className={'form-control' + (errors.body && touched.body ? ' is-invalid' : '')} placeholder="Email Body"/>
                                    <ErrorMessage name="body" className="invalid-feedback" render={msg => <div className="text-danger">{msg}</div>} />
                                </div>

                                <div className="form-group" key="recipients">
                                    <label className="text-light" htmlFor="recipients">Recipient List</label>
                                    <Field rows="2" component="textarea" name="recipients" type="text" className={'form-control' + (errors.recipients && touched.recipients ? ' is-invalid' : '')} placeholder="Recipient List"/>
                                    <ErrorMessage name="recipients" className="invalid-feedback" render={msg => <div className="text-danger">{msg}</div>} />
                                </div>
                                
                                <div className="form-group " key="buttons" style={{ margin: '2rem' }}>
                                    <button className="btn btn-primary float-right" variant="primary" type="submit">Submit</button>
                                    <button className="btn btn-secondary" style={{ marginLeft: '2rem' }} variant="secondary" type="reset">Reset</button>
                                    <button className="btn btn-secondary float-left" variant="secondary" onClick={this.props.onCancel}>Back</button>
                                </div>
                            </Form>
                        )}
                    />
                        { this.renderProductInfo() }
                </div>
            </div>
            </>
        )
    }
}

export default CustomerForm;