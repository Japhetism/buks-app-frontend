import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const AuthView = () => {
  return <Fragment>
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Buks App</h2>
          <h4>Log in</h4>
        </div>
        <div className="row clearfix">
          <div className="">
            <form>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <input className="button" type="submit" value="Login" />
            </form>
          </div>
          <p className="credit"><Link to="/signup">New User? Sign up</Link></p>
        </div>
      </div>
    </div>
    <p className="credit">Developed by <a href="https://github.com/Bukunmitanimonure">BTani</a></p>
  </Fragment>
}

export default AuthView;