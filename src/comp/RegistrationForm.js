
//registeration
function RegistrationForm(props) {
 
  const { data, setData, errors, setErrors }=props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    setErrors(validate(data));
    alert("submit");
  };

  const validate = (item) => {
    const err = {};
    const regex = /^[a-zA-Z0-9_-]{3,10}$/;
    const passregex = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
    if (!item.name) {
      err.name = " Please Enter Your Name";
    } else if (!regex.test(item.name)) {
      err.name = "Enter a valid name";
    }
    if (!item.username) {
      err.username = " Please Enter a username";
    } else if (!regex.test(item.username)) {
      err.username = "Enter a valid username";
    }
    if (!item.email) {
      err.email = "Please Enter an e-mail ";
    } else if (!/^.+@.+$/.test(item.email)) {
      err.email = "Enter a valid email";
    }
    if (!item.password) {
      err.password = " Please Enter a password";
    } else if (!passregex.test(item.password)) {
      err.password = "Enter a valid password";
    }
    if (!item.confirmpassword) {
      err.confirmpassword = "Please confirm password";
    } else if (item.confirmpassword !== item.password) {
      err.confirmpassword = "Enter the same password";
    }
    return err;
  };

  return (
    <div className="App">
      <div className="layout">
        <h3>Register your account</h3>
        <div className="fieldlayout">
          <div className="inputfield">
            <label className="namelable">Name :</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder=" Enter your full name.."
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <p>{errors.name}</p>
          <div className="inputfield">
            <label className="usernamelable">Username :</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder=" Enter a username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <p>{errors.username}</p>
          <div className="inputfield">
            <label className="emaillable">Email address :</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder=" Enter your email address.."
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <p className="emailp">{errors.email}</p>
          <div className="inputfield">
            <label className="passwordlable">Password :</label>
            <br />
            <input
              type="text"
              name="password"
              placeholder=" Enter your psaaword.."
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <p>{errors.password}</p>
          <div className="inputfield">
            <label className="confirmlable">Confirm password :</label>
            <br />
            <input
              type="text"
              name="confirmpassword"
              placeholder=" Enter your password again.."
              value={data.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <p>{errors.confirmpassword}</p>
          <div className="btn">
            <button className="submitbtn" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
