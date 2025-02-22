import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./WelcomePage.css";
import { loginUser, registerUser } from "../utils/apis.js";

const EMPLOYEE = "EMPLOYEE";
const ADMIN = "ADMIN";

const WelcomePage = ({ isValid, isAdmin }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [userRegister, setUserRegister] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [userSelect, setUserSelect] = useState(EMPLOYEE);
  const [newEmployee, setNewEmployee] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isValid) return;
    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/employee");
    }
  }, [isValid, isAdmin]);

  const handlerAdminLogin = async (e) => {
    e.preventDefault();
    const { username, password } = user;
    const loggedInUser = await loginUser(username, password);
    if (loggedInUser) {
      navigate("/admin");
    }
    setUser({
      username: "",
      password: "",
    });
  };

  const handlerEmployeeLogin = async (e) => {
    e.preventDefault();
    const { username, password } = user;
    if (username === "admin") {
      return;
    }
    const loggedInUser = await loginUser(username, password);
    if (loggedInUser) {
      console.log("Navigating....");
      navigate("/employee");
    }
    setUser({
      username: "",
      password: "",
    });
  };

  const handlerEmployeeRegister = async (e) => {
    e.preventDefault();

    console.log(userRegister);
    const { username, password, confirmpassword } = userRegister;
    if (password !== confirmpassword) {
      return;
    }
    const registeredUser = await registerUser(username, password);
    if (registeredUser) {
      navigate("/employee");
    }
    setUserRegister({
      username: "",
      password: "",
      confirmpassword: "",
    });
  };

  const changeLoginHandler = (e) => {
    setUser((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const registerHandler = (e) => {
    setUserRegister((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="wel-main-container">
      <nav className="wel-nav">
        <div className="wel-nav-option">
          <p className="wel-nav-label">Login as :</p>
          <button
            className={
              userSelect === ADMIN
                ? "wel-nav-btn wel-nav-btn-active"
                : "wel-nav-btn"
            }
            onClick={() => {
              setUserSelect(ADMIN);
            }}
          >
            Admin
          </button>
          <button
            className={
              userSelect === EMPLOYEE
                ? "wel-nav-btn wel-nav-btn-active"
                : "wel-nav-btn "
            }
            onClick={() => {
              setUserSelect(EMPLOYEE);
            }}
          >
            Employee
          </button>
        </div>
      </nav>
      <main className="wel-form-container">
        {userSelect === ADMIN && (
          <>
            <h2 className="form-title">Admin Login</h2>
            <form onSubmit={handlerAdminLogin} className="admin-login-form">
              <label className="form-label">User Name :</label>
              <input
                type="text"
                name="username"
                required
                placeholder="user name"
                value={user.username}
                className="form-input"
                onChange={changeLoginHandler}
              />
              <label className="form-label">Password :</label>
              <input
                type="password"
                name="password"
                required
                value={user.password}
                onChange={changeLoginHandler}
                placeholder="password"
                className="form-input"
              />
              <button className="wel-nav-btn form-submit-btn" type="submit">
                Submit
              </button>
            </form>
          </>
        )}
        {userSelect === EMPLOYEE &&
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
                  name="username"
                  required
                  value={user.username}
                  placeholder="user name"
                  onChange={changeLoginHandler}
                  className="form-input"
                />
                <label className="form-label">Password :</label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  value={user.password}
                  onChange={changeLoginHandler}
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
                onSubmit={handlerEmployeeRegister}
                className="admin-login-form"
              >
                <label className="form-label">User Name :</label>
                <input
                  type="text"
                  name="username"
                  required
                  onChange={registerHandler}
                  value={userRegister.username}
                  placeholder="user name"
                  className="form-input"
                />
                <label className="form-label">Password :</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={userRegister.password}
                  onChange={registerHandler}
                  placeholder="password"
                  className="form-input"
                />
                <label className="form-label">Confirm Password :</label>
                <input
                  type="password"
                  name="confirmpassword"
                  required
                  value={userRegister.confirmpassword}
                  onChange={registerHandler}
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
