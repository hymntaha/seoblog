import React from 'react';

const SignupComponent = () => {
  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input onChange={handleChange} type="text" className="form-control" placeholder="Enter your name">
        </div>
      </form>
    )
  }
  return (
    <div>
      {signupForm()}
    </div>
  );
};

export default SignupComponent;
