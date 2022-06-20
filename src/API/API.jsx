import axios from "axios"

axios.defaults.withCredentials = true;

export default class API {
  url = "http://91.236.239.56/api/v1";

  getRestaurants() {
    fetch("http://91.236.239.56/api/v1/restaurant").then(
      (result) => {
        console.log("hello")
        console.log(result)
        return result;
      },
      (error) => {
        return error;
      }
    );
  }
}
