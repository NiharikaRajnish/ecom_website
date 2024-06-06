import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    console.log("AuthProvider rendered");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async ({ username, password }) => {
    setIsFetching(true);
    setError(null);
    try {
      // Replace with your login logic
      const response = await fakeLoginApi(username, password);
      setUser(response.user);
      setIsFetching(false);
    } catch (err) {
      setError("Something went wrong...");
      setIsFetching(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isFetching, error, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Fake login API for demonstration purposes
const fakeLoginApi = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "password") {
        resolve({ user: { username } });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
