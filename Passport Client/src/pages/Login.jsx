const Google = "../img/google.png";
const Facebook = "../img/facebook.png";
const Github = "../img/github.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <div className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="login-right">
          <input placeholder="Email" className="login-input" />
          <input placeholder="Password" className="login-input" />
          <button className="login-button">Log In</button>
          <span className="login-forgot">Forgot Password?</span>
          <button className="login-register-button">
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
