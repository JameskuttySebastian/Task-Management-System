import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext([]);

const { Provider } = UserContext;

const UserProvider = ({ value = [] }) => {
  const [userId, setUserId] = useState("");
  const [userType, setUserType] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const userStore = {
    id: [userId, setUserId],
    type: [userType, setUserType],
    token: [accessToken, setAccessToken],
  };
  return <Provider value={userStore} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
