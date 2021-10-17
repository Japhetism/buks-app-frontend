import { Fragment } from "react";
import "./style.scss";

const OnboardingView = () => {
  return <Fragment>
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Buks App</h2>
          <h4>Sign Up</h4>
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
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                <input type="password" name="password" placeholder="Re-type Password" required />
              </div>
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="name" placeholder="First Name" />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                    <input type="text" name="name" placeholder="Last Name" required />
                  </div>
                </div>
              </div>
              <div className="input_field radio_option">
                <input type="radio" name="radiogroup1" id="rd1" />
                <label htmlFor="rd1">Male</label>
                <input type="radio" name="radiogroup1" id="rd2" />
                <label htmlFor="rd2">Female</label>
              </div>
              <div className="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label htmlFor="cb1">I agree with terms and conditions</label>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb2" />
                <label htmlFor="cb2">I want to receive the newsletter</label>
              </div>
              <input className="button" type="submit" value="Register" />
            </form>
          </div>
          <p className="credit">Already have an account? Log in</p>
        </div>
      </div>
    </div>
    <p className="credit">Developed by <a href="https://github.com/Bukunmitanimonure">BTani</a></p>
  </Fragment>
}

export default OnboardingView;