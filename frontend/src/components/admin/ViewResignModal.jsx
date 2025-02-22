/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ViewResignModal.css";
const ViewResignModal = ({ isOpen, onClose, employeeData }) => {
  const [resignDate, setResignDate] = useState(employeeData.resigndate);
  if (!isOpen) return null;
  console.log(employeeData);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form
          className="modal-content-child"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="modal-heading">Resigned Form</h1>
          <label className="resign-modal-label">
            Employee Name :
            <span className="modal-reason">{employeeData.username}</span>
          </label>
          <label className="resign-modal-label">
            Resign Date :
            <span className="modal-reason">{employeeData.resigndate}</span>
          </label>
          <div>
            <label className="resign-modal-label">Reason for Resign :</label>
            <span className="modal-reason">{employeeData.reason}</span>
          </div>
          <label className="resign-modal-label">Approved Resign Date :</label>
          <input
            type="date"
            onChange={(evt) => {
              console.log(evt);
              setResignDate(evt.target.value);
            }}
            className="approved-resign-input"
            value={resignDate}
          />
          <div className="modal-buttons">
            <button className="accept-btn" onClick={() => onClose(false)}>
              Close
            </button>
            <button className="accept-btn">Reject</button>
            <button className="accept-btn">Accept</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewResignModal;
