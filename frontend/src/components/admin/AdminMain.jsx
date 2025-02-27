import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewResignModal from "./ViewResignModal";
import { getResignations } from "../../utils/apis.js";
import "./AdminMain.css";

const AdminMain = ({ isAdmin }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showResignations, setShowResignations] = useState(true);
  const [employeeData, setEmployeeData] = useState({});
  const [resignData, setResignData] = useState([]);

  const fetchResignations = async () => {
    const res = await getResignations(token);
    setResignData(res.data);
  };

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
    setIsLoading(true);
    fetchResignations();
    setIsLoading(false);
  }, []);

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
              <th>status</th>
              <th>view</th>
            </tr>
          </thead>
          <tbody className="admin-resign-body">
            {isLoading && <div>Loading...</div>}
            {resignData.map((data, index) => {
              return (
                <tr className="admin-resign-body-row" key={data._id}>
                  <td>{index + 1}</td>
                  <td>{data.employeeId.username}</td>
                  <td>{data.employeeId._id}</td>
                  <td>{data.status}</td>
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
          fetchResignations={fetchResignations}
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
