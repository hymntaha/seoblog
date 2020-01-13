import React from 'react';

const {useState} from 'react';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message:'',
    showForm:true
  });

  const { name, email, password ,error, loading, message, showForm} = values;

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
        <input onChange={handleChange} type="text" className="form-control" placeholder="Enter your name" />
      </div>
        <div className="form-group">
          <input onChange={handleChange} type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <input onChange={handleChange} type="password" className="form-control" placeholder="Enter your password" />
        </div>
        <button className="btn btn-primary">
          Signup
        </button>
      </form>
    )
  };

  return <React.Fragment>{signupForm()}</React.Fragment>
};

export default SignupComponent;
