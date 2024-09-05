import Cookies from "js-cookie";

const USER_TOKEN = "TrionesUserToken";

export class StorageUtils {
  static setTrionesUserToken = (token: string) => {
    sessionStorage.setItem(USER_TOKEN, token);
    Cookies.set(USER_TOKEN, token);
  };

  static getTrionesUserToken = () => {
    return sessionStorage.getItem(USER_TOKEN) || Cookies.get(USER_TOKEN);
  };

  static removeTenantUserToken = () => {
    sessionStorage.removeItem(USER_TOKEN);
    Cookies.remove(USER_TOKEN);
  };

  static setToken = (key: string, token: string) => {
    sessionStorage.setItem(key, token);
    Cookies.set(key, token);
  };

  static getToken = (key: string): string | undefined => {
    return sessionStorage.getItem(key) || Cookies.get(key);
  };
}
