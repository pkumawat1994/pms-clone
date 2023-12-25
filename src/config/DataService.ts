import axios from "axios";

const DataService = axios.create({
  // baseURL: "http://192.168.1.5:3030/api/",
  baseURL : "http://192.168.43.12:3030/api/"
});


DataService.interceptors.request.use(
  (config) => {
    const  tok = localStorage.getItem("adminToken");
    console.log(tok,45)
    if (tok) {
        config.headers['auth'] = tok;
    }
    return config;
  },
 
);


export default DataService;
