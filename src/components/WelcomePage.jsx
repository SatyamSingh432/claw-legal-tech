import { useState } from "react";
import "./WelcomePage.css";
const WelcomePage = () => {
  const [userSelect, setUserSelect] = useState(0);
  const [newEmployee, setNewEmployee] = useState(true);
  const handlerAdminLogin = () => {};
  const handlerEmployeeLogin = () => {};
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
        {userSelect === 1 && (
          <>
            <h2 className="form-title">Admin Login</h2>
            <form onSubmit={handlerAdminLogin} className="admin-login-form">
              <label className="form-label">User Name :</label>
              <input
                type="text"
                placeholder="user name"
                className="form-input"
              />
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
          </>
        )}
        {userSelect === 2 &&
          (newEmployee ? (
            <>
              <h2 className="form-title">Employee Login</h2>
              <form
                onSubmit={handlerEmployeeLogin}
                className="admin-login-form"
              >
                <label className="form-label">User Name :</label>
                <input
                  type="text"
                  placeholder="user name"
                  className="form-input"
                />
                <label className="form-label">Password :</label>
                <input
                  type="password"
                  placeholder="password"
                  className="form-input"
                />
                <button className="wel-nav-btn form-submit-btn" type="submit">
                  Submit
                </button>
                <p className="form-employee-text">
                  New Register?
                  <span
                    className="form-employee-text-span"
                    onClick={() => {
                      setNewEmployee(false);
                    }}
                  >
                    Register
                  </span>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2 className="form-title">Employee Register</h2>
              <form
                onSubmit={handlerEmployeeLogin}
                className="admin-login-form"
              >
                <label className="form-label">User Name :</label>
                <input
                  type="text"
                  placeholder="user name"
                  className="form-input"
                />
                <label className="form-label">Password :</label>
                <input
                  type="password"
                  placeholder="password"
                  className="form-input"
                />
                <label className="form-label">Confirm Password :</label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="form-input"
                />
                <button className="wel-nav-btn form-submit-btn" type="submit">
                  Submit
                </button>
                <p className="form-employee-text">
                  Already register?
                  <span
                    className="form-employee-text-span"
                    onClick={() => {
                      setNewEmployee(true);
                    }}
                  >
                    Login
                  </span>
                </p>
              </form>
            </>
          ))}
      </main>
    </div>
  );
};

export default WelcomePage;
