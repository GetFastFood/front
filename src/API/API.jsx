import axios from "axios";

axios.defaults.withCredentials = true;

export default class API {
  url = "http://91.236.239.56/api/v1";

  getRestaurants() {
    return fetch(this.url + "/restaurant", { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (text) {
        return text;
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  getUsers() {
    return fetch(this.url + "/users", { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (text) {
        return text;
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  getRestaurant(idResto) {
    return fetch(this.url + "/restaurant/" + idResto, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (text) {
        return text;
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  getCommandes() {
    return fetch(this.url + "/order/", { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (text) {
        return text;
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  getCommande(idResto) {
    return fetch(this.url + "/order/restaurant/" + idResto, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (text) {
        return text;
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  login(email, password) {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      body: urlencoded,
      redirect: "follow",
    };

    return fetch(this.url + "/auth/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        localStorage.setItem(
          "access_token",
          JSON.parse(result)["access_token"]
        );
        localStorage.setItem(
          "refresh_token",
          JSON.parse(result)["refresh_token"]
        );
        localStorage.setItem("role", JSON.parse(result)["role"]);
        localStorage.setItem("id", JSON.parse(result)["id"]);
        localStorage.setItem("email", JSON.parse(result)["email"]);
        localStorage.setItem("login", true);
      });
  }

  disconnect() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.setItem("login", false);
  }

  getUser(idUser) {
    return fetch(this.url + "/users/" + idUser, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (text) {
        return text;
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  checkPassword(email, password) {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    urlencoded.append("mode", "cors");

    var requestOptions = {
      method: "POST",
      body: urlencoded,
      redirect: "follow",
    };

    return fetch(this.url + "/auth/login", requestOptions).then((response) =>
      response.text()
    );
  }

  updateUser(id, values) {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", values.email);
    urlencoded.append("password", values.password);
    urlencoded.append("firstname", values.firstname);
    urlencoded.append("lastname", values.lastname);
    urlencoded.append("address", values.address);
    urlencoded.append("tel", values.tel);
    urlencoded.append("status", true);
    urlencoded.append("role", values.role);
    var requestOptions = {
      method: "PUT",
      body: urlencoded,
      redirect: "follow",
      mode: "cors",
    };

    fetch(this.url + "/users/" + id, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  deleteUser(id, localDelete) {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
      mode: "cors",
    };

    if(localDelete){
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("role");
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      localStorage.setItem("login", false);
    }

    return fetch(this.url + "/users/" + id, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  register(values) {

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", values.email);
    urlencoded.append("password", values.password);
    urlencoded.append("firstname", values.firstname);
    urlencoded.append("lastname", values.lastname);
    urlencoded.append("address", values.address);
    urlencoded.append("tel", values.tel);
    urlencoded.append("status", true);
    urlencoded.append("role", values.role);

    var requestOptions = {
      method: "POST",
      body: urlencoded,
      redirect: "follow",
    };

    return fetch(this.url + "/auth/register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
}
