import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./EmployeeResign.css";

const EmployeeResign = ({ isAdmin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin]);

  const [resignData, setResignData] = useState({
    date: "",
    reason: "",
    ans1: "",
    ans2: "",
  });
  const [resignForm, setResignForm] = useState(true);
  const resignDataHandler = (e) => {
    e.preventDefault();
    console.log(resignData);
    setResignData({
      date: "",
      reason: "",
      ans1: "",
      ans2: "",
    });
    setResignForm(false);
  };
  const resignDataChange = (e) => {
    setResignData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="em-resign-container">
      <nav className="em-resign-nav">
        <p className="em-resign-nav-opt">User Name : </p>
        <p className="em-resign-nav-opt">Satyam</p>
      </nav>
      <main className="em-resign-form-container">
        {resignForm ? (
          <form className="em-resign-form" onSubmit={resignDataHandler}>
            <h2>Resign Form</h2>

            <label className="em-resign-label">Last Working Day</label>
            <input
              className="em-resign-input"
              type="date"
              name="date"
              id=""
              value={resignData.date}
              required
              onChange={resignDataChange}
            />
            <label className="em-resign-label">Reason For Resign</label>
            <textarea
              className="em-resign-textarea"
              name="reason"
              id=""
              value={resignData.reason}
              required
              onChange={resignDataChange}
              placeholder="Enter your reason..."
            ></textarea>
            <button className="em-resign-submit" type="submit">
              Submit
            </button>
            <p className="side-details">
              When Approved Questioner Form will Open, wait for some time.
            </p>
          </form>
        ) : (
          <form className="em-resign-form" onSubmit={resignDataHandler}>
            <h2>Resign Accepted Fill Questionnaire Form</h2>
            <label className="em-resign-label">
              1. Why are you leaving this position?
            </label>
            <textarea
              className="em-resign-textarea"
              name="ans1"
              required
              id=""
              value={resignData.ans1}
              placeholder="Enter here..."
              onChange={resignDataChange}
            />
            <label className="em-resign-label">
              2. Do you think the company supported your career goals?
            </label>
            <textarea
              className="em-resign-textarea"
              name="ans2"
              required
              id=""
              value={resignData.ans2}
              onChange={resignDataChange}
              placeholder="Enter here..."
            />
            <button className="em-resign-submit" type="submit">
              Submit
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default EmployeeResign;
