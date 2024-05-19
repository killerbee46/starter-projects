import { removeAllCache } from "Utils/removeCacheOnResponse";
import { persistor } from "../Redux/AppStore";
import { AuthApi } from "./Api";

//modify User
export const requestLogin = (data: any) => {
  return AuthApi({
    method: "POST",
    data: data,
    url: "/auth/token",
  });
};

export const requestLogout = () => {
  localStorage.removeItem("auths");
  localStorage.removeItem("token");
  localStorage.removeItem("loggedIn");
  persistor.purge();
  removeAllCache();
  window.location.href = "/";
};
