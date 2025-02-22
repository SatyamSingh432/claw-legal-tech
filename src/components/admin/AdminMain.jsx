import { useState } from "react";
import "./AdminMain.css";
const AdminMain = () => {
  let resignData = [
    {
      username: "satyam",
      id: "1",
      resigndate: "02/11/2024",
      reason: "I want to quit",
    },
    {
      username: "rahul",
      id: "2",
      resigndate: "05/12/2024",
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
        <button className="wel-nav-btn">Resignations</button>
        <button className="wel-nav-btn">Questionnaire</button>
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
                    <button>view</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminMain;
