import React from "react";
import Router from 'next/router';

import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";

const SigninCompnent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(()=> {
    isAuth() && Router.push('/')
  },[])

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signin(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data,()=>{
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else{
            Router.push(`/user`);
          }
        })
      }
    });
  };
  const handleChange = e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="aler alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="aler alert-info">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="aler alert-info">{message}</div> : "";
  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <button className="btn btn-primary">Signup</button>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
    </React.Fragment>
  );
};

export default SigninCompnent;
