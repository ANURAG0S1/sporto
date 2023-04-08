import "./auth.css";

const fbIcon = require("./../../assets/icons/fb.png");
const googleIcon = require("./../../assets/icons/google.png");
const mailIcon = require("./../../assets/icons/mail.png");

export function Auth() {
  return (
    <>
      <div className="login-page">
        <div className="mobile-login">
          <div className="f-w-500 f-20"> Log in or Sign up</div>
          <div className="input-box d-flex b-r-10">
            <div className="country-code-input b-r-10 d-flex jcc aic  ">
              {" "}
              +91
            </div>
            <input
              id="mobile"
              type="text"
              className="w-100 b-r-10"
              max={10}
              placeholder="Enter your Mobile Number"
            />
          </div>

          <div className="m-b-16 t-gray-1 f-w-500">Get OTP via :</div>
          <div className="otp-options d-flex">
            <div className="whatsapp m-r-8  w-50 p-16 d-flex jcc aic outlined-button button">
              Whatsapp
            </div>
            <div className="sms w-50 m-l-8 p-16 d-flex jcc aic solid-button button ">
              SMS
            </div>
          </div>

          <div className="note f-12 f-w-400 m-t-16">
            By continuing, you agree to our Terms of Service and privacy policy
          </div>

          <div className="skip-now t-gray-1 f-w-500">Skip Now</div>
        </div>

        <div className="social-login t-gray-1">
          <div className="divider w-100 d-flex jcc aic">
            <div className="divider-text f-14">Or Continue with</div>
            <div className="border-line w-100"></div>
          </div>

          <div className="social-login-methods">
            <div className="Google">
              <div className="icon-wrapper">
                <img src={googleIcon} alt="" className="icon" />
              </div>
              <div className="icon-text">Google</div>
            </div>
            <div className="Facebook">
              <div className="icon-wrapper">
                <img src={fbIcon} alt="" className="icon" />
              </div>
              <div className="icon-text">FaceBook</div>
            </div>
            <div className="mail">
              <div className="icon-wrapper">
                <img src={mailIcon} alt="" className="icon" />
              </div>
              <div className="icon-text">Mail</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
