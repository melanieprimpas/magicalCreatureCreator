import jwtDecode from "jwt-decode";

class AuthService {
  getProfile() {
    // return the decoded token
    const decoded = jwtDecode(this.getToken());
    return decoded;
  }

  loggedIn() {
    // return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    // return a value that indicates if the token is expired
    const decoded = jwtDecode(token);
    if (decoded.exp) {
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    }
    return false;
  }

  getToken() {
    // return the token
    const loggedUser = localStorage.getItem("id_token") || "";
    return loggedUser;
  }

  login(idToken) {
    // set the token to localStorage
    localStorage.setItem("id_token", idToken);
    // redirect to the home page
    window.location.assign("/");
  }

  logout() {    
    localStorage.removeItem("id_token");   
  }
}

export default new AuthService();
