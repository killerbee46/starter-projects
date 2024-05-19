import axioss, { AxiosError } from "axios";
import { environment } from "../config/environment"; 
import { buildWebStorage, setupCache } from "axios-cache-interceptor";

import { requestLogout } from "./AuthApi";

export const baseUrl = environment.baseUrl;
// Same object, new types.
export const axios: any = setupCache(axioss, {
  debug: console.log,
  methods: ["get"],
  storage: buildWebStorage(localStorage, "axios-cache:"),
  // storage: buildMemoryStorage(
  //   /* cloneData default=*/ false,
  //   /* cleanupInterval default=*/ false,
  //   /* maxEntries default=*/ false
  // ),
  ttl: 1000 * 60 * 5,
});
const getToken = () => {
  let token: any = false;
  let auths = localStorage.getItem("auths") || "";
  // console.log(JSON.parse(auths), 'auths');
  const tokens = JSON.parse(auths);

  try {
    token = tokens?.token;
  } catch (error) {
    localStorage.setItem("loggedIn", "false");
  }
  return token;
};
export const getUserId = () => {
  let id: any = false;
  try {
    id = localStorage.getItem("auths")
      ? JSON.parse(localStorage.getItem("auths") || "")?.id
      : "";
  } catch (error) {
    console.log(error);
  }
  return id;
};

export const getTeamId = () => {
  let id: any = false;
  try {
    id = JSON.parse(localStorage.getItem("auths") || "")?.user?.team?.id;
  } catch (error) {
    console.log(error);
  }
  return id;
};

export const getUserName = () => {
  let id: any = false;
  try {
    id = localStorage.getItem("auths")
      ? JSON.parse(localStorage.getItem("auths") || "")?.fullname
      : "";
  } catch (error) {
    console.log(error);
  }
  return id;
};

export const getRole = () => {
  var role: any = "";
  try {
    role = localStorage.getItem("auths")
      ? JSON.parse(localStorage.getItem("auths") || "")?.roles
      : [];
  } catch (error) {
    console.log(error);
  }
  return role;
};

export const getUserDetails = () => {
  let details: any = false;
  try {
    details = JSON.parse(localStorage.getItem("auths") || "");
  } catch (error) {
    console.log(error);
  }
  return details;
};

export const getUserBranch = () => {
  let branch = getUserDetails()?.branches?.[0];
  return branch || undefined;
};

export const getUserBranches = () => {
  let branch = getUserDetails()?.branches;
  return branch || undefined;
};

export const getAuths = () => {
  return JSON.parse(localStorage.getItem("auths") || "") || false;
};

export const AuthApi = axios.create({
  baseURL: `${baseUrl}/`,
});

const API = axios;

// ({
//   baseURL: `${baseUrl}`,
// });

axios.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    };
    // if (config?.data?.invalidateCaches) {
    //   config.headers.invalidateCaches = config?.data?.invalidateCaches;
    //   delete config?.data?.invalidateCaches;
    // }

    // let cacheId = "";

    // if (!config.params) {
    //   config.cache.override = true;
    // }
    // if (["module-filtered-access"]?.some((m) => config?.url?.includes(m))) {
    //   config.cache.override = true;
    // }
    // if (Object.keys(config?.params || {}).length > 0) {
    //   cacheId =
    //     config.url + JSON.stringify(GetExisted(config?.params || {})) || "";
    // } else {
    //   cacheId = config.url;
    // }
    // config.id = cacheId;

    // if (config.params?.update) {
    //   axios.storage.remove(cacheId);
    // }

    // delete config?.params?.update;
    // if (config?.params) config.params = { ...GetExisted(config?.params) };
    // config.baseURL = baseUrl;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   (response) => {
//     removeCacheOnResponse(response);
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       // window.location.reload()
//       requestLogout();
//     }
//     return Promise.reject(error);
//   }
// );

export const MediaApis = axios.create({
  baseURL: baseUrl,
});

//API for media upload
API.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
MediaApis.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default API;
