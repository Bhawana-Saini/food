import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const validateLogin = (valData) => {
  const errors = {};

  if (!valData.email) {
    errors.email = "Email can not be left blank";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valData.email)) {
    errors.email = "Invalid email address";
  }

  if (!valData.password) {
    errors.password = "Password can not be left blank";
  }

  return errors;
};

const MyForm = () => {


  //window.location.reload();

  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues,
    validate: validateLogin,
    onSubmit: (values) => {

      if (values.email === "admin@gmail.com" && values.password === "12345678") {
        navigate("/Home");
        window.location.reload();
      }
      else {
        alert('Wrong Credentials');
      }
    },
  });

  return (
    <>
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <div className="ImageContianer">
            <img
              src="https://st3.depositphotos.com/35530942/37682/v/450/depositphotos_376824262-stock-illustration-online-registration-sign-concept-young.jpg"
              className="GroupImage"
            />
          </div>
          <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
              <div className="LogoContainer">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/foodies-logo-design-template-44f1cac34d28b362c02fd8079e141ad6_screen.jpg?ts=1658385175"
                  className="logo"
                />
              </div>
              <header className="header"> Login </header>
              <form onSubmit={formik.handleSubmit}>
                <div className="inputContainer">
                  <label className="label" htmlFor="emailAddress">
                    <img
                      src="https://i.imgur.com/Hn13wvm.png"
                      className="labelIcon"
                    />
                    <span>Email Address*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email Address :admin@gmail.com"
                    className="input"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="errormessage">{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="inputContainer">
                  <label className="label" htmlFor="password">
                    <img
                      src="https://i.imgur.com/g5SvdfG.png"
                      className="labelIcon"
                    />
                    <span>Password*</span>
                  </label>

                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password : 12345678"
                    className="input"
                    name="password"
                    value={formik.values.password}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="errormessage">{formik.errors.password}</p>
                  ) : null}
                </div>

                <button type="submit" className="LoginButton">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyForm;
