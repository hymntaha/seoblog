import React from 'react';

const SignupComponent = () => {
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log('handle submit')
  }
  const handleChange = (e)=> {
   console.log(e.target.value)
  }
  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input onChange={handleChange} type="text" className="form-control" placeholder="Enter your name">
        </div>
      </form>
    )
  };

  return <React.Fragment>{signupForm()}</React.Fragment>
};

export default SignupComponent;
