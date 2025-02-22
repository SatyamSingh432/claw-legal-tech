import { useState } from "react";
import ViewResignModal from "./ViewResignModal";
import "./AdminMain.css";
const AdminMain = () => {
  const [showModal, setShowModal] = useState(false);
  const [showResignations, setShowResignations] = useState(true);
  const [employeeData, setEmployeeData] = useState({});
  let resignData = [
    {
      username: "satyam",
      id: "1",
      resigndate: "2024-11-02",
      reason: "I want to quit",
    },
    {
      username: "rahul",
      id: "2",
      resigndate: "2024-12-05",
      reason: "Personal reasons",
    },
    {
      username: "priya",
      id: "3",
      resigndate: "15/01/2025",
      reason: "Better opportunity",
    },
    {
      username: "ananya",
      id: "4",
      resigndate: "22/02/2025",
      reason: "Relocating to another city",
    },
    {
      username: "rohit",
      id: "5",
      resigndate: "10/03/2025",
      reason: "Health issues",
    },
  ];

  return (
    <div className="admin-resign-container">
      <nav className="em-resign-nav">
        <button
          className={
            showResignations ? "wel-nav-btn wel-nav-btn-active" : "wel-nav-btn"
          }
          onClick={() => {
            setShowResignations(true);
          }}
        >
          Resignations
        </button>
        <button
          className={
            showResignations ? "wel-nav-btn " : "wel-nav-btn wel-nav-btn-active"
          }
          onClick={() => {
            setShowResignations(false);
          }}
        >
          Questionnaire
        </button>
        <p className="em-resign-nav-opt">User Name : </p>
        <p className="em-resign-nav-opt">Admin</p>
      </nav>
      <main className="admin-container">
        <h2>All Resignations</h2>
        <table className="admin-resign-list">
          <thead className="admin-resign-header">
            <tr className="admin-resign-header-row">
              <th>S.No</th>
              <th>username</th>
              <th>id</th>
              <th>view</th>
            </tr>
          </thead>
          <tbody className="admin-resign-body">
            {resignData.map((data, index) => {
              return (
                <tr className="admin-resign-body-row" key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.username}</td>
                  <td>{data.id}</td>
                  <td>
                    <button
                      onClick={() => {
                        setEmployeeData(data);
                        setShowModal(true);
                      }}
                    >
                      view
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
      {showModal && (
        <ViewResignModal
          isOpen={showModal}
          onClose={setShowModal}
          resignData={resignData}
          employeeData={employeeData}
        />
      )}
    </div>
  );
};

export default AdminMain;
