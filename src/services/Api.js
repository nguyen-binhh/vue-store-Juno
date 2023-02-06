import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-be-shoes.onrender.com/api/v1/",
});

export default Api;
