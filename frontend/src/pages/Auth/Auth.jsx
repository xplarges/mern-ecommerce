import { useState } from "react";
import { IoMdPerson, IoIosMail, IoMdLock } from "react-icons/io";
import "./Auth.css";

export const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className={`auth ${isSignIn ? "sign-in-mode" : "sign-up-mode"}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2>Sign In</h2>
            <div className="input-field">
              <IoMdPerson />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <IoMdLock />
              <input type="password" placeholder="Password" />
            </div>
            <button className="btn">Sign In</button>
          </form>
          <form className="sign-up-form">
            <h2>Sign Up</h2>
            <div className="input-field">
              <IoMdPerson />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <IoIosMail />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <IoMdLock />
              <input type="password" placeholder="Password" />
            </div>
            <button className="btn">Sign Up</button>
          </form>
        </div>
        <div className="panels-container">
          <div className="panel-left-panel">
            <div className="content">
              <h3 className="loginh3">New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button className="btn transparent" onClick={() => setIsSignIn(false)}>Sign Up</button>
            </div>
          </div>
          <div className="panel-right-panel">
            <div className="content">
              <h3 className="loginh3">One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" onClick={() => setIsSignIn(true)}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
