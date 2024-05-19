import API from "./Api";

export const getJoke = () => {
    return API({
        url: "http://ip-api.com/json",
        method: "GET",
      })
} 