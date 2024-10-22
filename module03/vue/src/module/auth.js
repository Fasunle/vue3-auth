import authApi from "@/api/auth";
import { useSessionStore } from "@/stores/session";

const TOKEN_KEY = "token";

const getToken = () => localStorage.getItem(TOKEN_KEY);

const login = (userName, password) => {
  return new Promise((resolve, reject) => {
    const sessionStore = useSessionStore();

    authApi
      .authenticate(userName, password)
      .then((result) => {
        localStorage.setItem(TOKEN_KEY, result.token);
        sessionStore.setFullName(result.fullName);
        sessionStore.setIsLoggedIn(true);
        resolve();
      })
      .catch((error) => reject(error));
  });
};

const refresh = () => {
  console.log("🚀 ~ running a refresh... 😂");
  //
  return new Promise((resolve, reject) => {
    const token = getToken();
    const sessionStore = useSessionStore();
    if (!token) return;

    authApi
      .refresh(token)
      .then((result) => {
        localStorage.setItem(TOKEN_KEY, result.token);
        sessionStore.setFullName(result.fullName);
        sessionStore.setIsLoggedIn(true);
        resolve();
      })
      .catch((error) => reject(error));
  });
};
console.log("🚀 ~ refresh ~ r:", r);

const logout = () => {
  return new Promise((resolve) => {
    const sessionStore = useSessionStore();

    localStorage.removeItem(TOKEN_KEY);
    sessionStore.setFullName("");
    sessionStore.setIsLoggedIn(false);
    resolve();
  });
};

const register = (fullName, userName, password) => {
  const data = {
    fullName,
    userName,
    password,
  };

  return new Promise((resolve, reject) => {
    authApi
      .register(data)
      .then(() => resolve())
      .then((err) => reject(err));
  });
};

export default { login, logout, register, refresh };
