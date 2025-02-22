import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./EmployeeResign.css";
import {
  submitResignation,
  getResignationStatus,
  submitQuestionnaire,
} from "../../utils/apis.js";

const QuesOne = "1. Why are you leaving this position?";
const QuesTwo = "2. Do you think the company supported your career goals?";

const EmployeeResign = ({ isAdmin, username }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin]);

  const [resignData, setResignData] = useState({
    date: "",
    reason: "",
  });
  const [questionnaires, setQuestionnaires] = useState({
    ans1: "",
    ans2: "",
  });
  const [resignForm, setResignForm] = useState(true);

  const fetchResignationStatus = async () => {
    const res = await getResignationStatus(token);
    const isResignationApproved = res.resignation_status === "approved";

    setResignForm(!isResignationApproved);
  };

  useEffect(() => {
    fetchResignationStatus();
  }, []);

  const resignDataHandler = async (e) => {
    e.preventDefault();
    const { date, reason } = resignData;
    setResignData({
      date: "",
      reason: "",
    });
    await submitResignation(date, reason, token);
  };

  const questionnairesDataHandler = async (e) => {
    e.preventDefault();
    const { ans1, ans2 } = questionnaires;
    setQuestionnaires({
      ans1: "",
      ans2: "",
    });

    const responses = [
      { questionText: QuesOne, response: ans1 },
      { questionText: QuesTwo, response: ans2 },
    ];
    await submitQuestionnaire(responses, token);
  };

  const resignDataChange = (e) => {
    setResignData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const questionnairesDataChange = (e) => {
    setQuestionnaires((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="em-resign-container">
      <nav className="em-resign-nav">
        <p className="em-resign-nav-opt">User Name : </p>
        <p className="em-resign-nav-opt">{username}</p>
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
          <form className="em-resign-form" onSubmit={questionnairesDataHandler}>
            <h2>Resign Accepted Fill Questionnaire Form</h2>
            <label className="em-resign-label">{QuesOne}</label>
            <textarea
              className="em-resign-textarea"
              name="ans1"
              required
              id=""
              value={questionnaires.ans1}
              placeholder="Enter here..."
              onChange={questionnairesDataChange}
            />
            <label className="em-resign-label">{QuesTwo}</label>
            <textarea
              className="em-resign-textarea"
              name="ans2"
              required
              id=""
              value={questionnaires.ans2}
              onChange={questionnairesDataChange}
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
