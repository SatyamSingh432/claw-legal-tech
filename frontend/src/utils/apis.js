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
