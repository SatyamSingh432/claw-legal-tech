const API_URL = "http://localhost:8080";

export const loginUser = async (username, password) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const resJson = await res.json();
  localStorage.setItem("token", resJson.token);
  return resJson;
};

export const verifyToken = async (token) => {
  const res = await fetch(`${API_URL}/api/auth/verify`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const registerUser = async (username, password) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (res.ok) {
    const resJson = await res.json();
    localStorage.setItem("token", resJson.token);
    return resJson;
  }
  return { error: true };
};

export const submitResignation = async (lwd, reason, token) => {
  const res = await fetch(`${API_URL}/api/user/resign`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ lwd, reason }),
  });
  return res.json();
};

export const getResignations = async (token) => {
  const res = await fetch(`${API_URL}/api/admin/resignations`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const concludeResignation = async (
  resignationId,
  approved,
  lwd,
  token
) => {
  const res = await fetch(`${API_URL}/api/admin/conclude_resignation`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ resignationId, approved, lwd }),
  });
  return res.json();
};

// get -> exit_responses
// get -> resignation_status
export const getResignationStatus = async (token) => {
  const res = await fetch(`${API_URL}/api/user/resignation_status`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const submitQuestionnaire = async (responses, token) => {
  const res = await fetch(`${API_URL}/api/user/responses`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ responses }),
  });
  return res.json();
};
