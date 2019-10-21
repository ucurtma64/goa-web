import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { notifyModal } from "../../actions";

class PostForm extends Component {
  async publishPost(fields) {
    this.props.notifyModal(true, "secondary", "Please wait");

    const post = Object.assign(fields, {
      author: this.props.auth.givenName + " " + this.props.auth.familyName
    });

    await axios.post("/api/posts", post);

    this.props.notifyModal(true, "success", "Published post");
  }

  render() {
    return (
      <Formik
        className="col-6"
        initialValues={{}}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("title is required"),
          text: Yup.string().required("text is required"),
          image: Yup.string().url("must be an url")
        })}
        onSubmit={fields => {
          this.publishPost(fields);
        }}
        render={({ errors, status, touched }) => (
          <Form className="d-block mx-auto px-2">
            <div className="form-row">
              <div className="form-group col" key="title">
                <label className="text-light" htmlFor="title">
                  Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className={
                    "form-control" +
                    (errors.title && touched.title ? " is-invalid" : "")
                  }
                  placeholder="Post title"
                />
                <ErrorMessage
                  name="title"
                  className="invalid-feedback"
                  render={msg => <div className="text-danger">{msg}</div>}
                />
              </div>

              <div className="form-group col" key="image">
                <label className="text-light" htmlFor="image">
                  Image link
                </label>
                <Field
                  name="image"
                  type="text"
                  className={
                    "form-control" +
                    (errors.image && touched.image ? " is-invalid" : "")
                  }
                  placeholder="Post image url"
                />
                <ErrorMessage
                  name="image"
                  className="invalid-feedback"
                  render={msg => <div className="text-danger">{msg}</div>}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col" key="text">
                <label className="text-light" htmlFor="text">
                  Text
                </label>
                <Field
                  rows="2"
                  component="textarea"
                  name="text"
                  type="text"
                  className={
                    "form-control" +
                    (errors.text && touched.text ? " is-invalid" : "")
                  }
                  placeholder="Post content"
                />
                <ErrorMessage
                  name="text"
                  className="invalid-feedback"
                  render={msg => <div className="text-danger">{msg}</div>}
                />
              </div>
            </div>

            <div
              className="form-group "
              key="buttons"
              style={{ margin: "2rem" }}
            >
              <button
                className="btn btn-primary float-right"
                variant="primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { notifyModal }
)(PostForm);
