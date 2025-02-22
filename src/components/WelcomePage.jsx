import { useState } from "react";
import "./WelcomePage.css";
const WelcomePage = () => {
  const [userSelect, setUserSelect] = useState(0);
  const handlerAdmin = () => {};
  return (
    <div className="wel-main-container">
      <nav className="wel-nav">
        <div className="wel-nav-option">
          <p className="wel-nav-label">Login as :</p>
          <button
            className={
              userSelect === 1
                ? "wel-nav-btn wel-nav-btn-active"
                : "wel-nav-btn"
            }
            onClick={() => {
              setUserSelect(1);
            }}
          >
            Admin
          </button>
          <button
            className={
              userSelect === 2
                ? "wel-nav-btn wel-nav-btn-active"
                : "wel-nav-btn "
            }
            onClick={() => {
              setUserSelect(2);
            }}
          >
            Employee
          </button>
        </div>
      </nav>
      <main className="wel-form-container">
        <h2 className="form-title">Admin Login</h2>
        <form onSubmit={handlerAdmin} className="admin-login-form">
          <label className="form-label">User Name :</label>
          <input type="text" placeholder="user name" className="form-input" />
          <label className="form-label">Password :</label>
          <input
            type="password"
            placeholder="password"
            className="form-input"
          />
          <button className="wel-nav-btn form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default WelcomePage;
