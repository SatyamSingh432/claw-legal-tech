import { useEffect, useState } from "react";
import { verifyToken } from "../utils/apis.js";

const useVerifyToken = () => {
  const [isValid, setIsValid] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setIsValid(false);
        return;
      }
      try {
        const data = await verifyToken(token);

        setIsValid(data.valid);
        setIsAdmin(data.is_admin);
        setUsername(data.username);
      } catch (err) {
        console.error(err);
        setIsValid(false);
      }
    };
    verify();
  }, [token]);

  return { isValid, isAdmin, username };
};

export { useVerifyToken };
