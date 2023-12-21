import axios from "axios";

const DataService = axios.create({
  baseURL: "http://192.168.1.3:5000/api/",
});


DataService.interceptors.request.use(
  (config) => {
    const  tok = localStorage.getItem("userToken");
    console.log(tok,45)
    if (tok) {
        config.headers['auth'] = tok;
    }
    return config;
  },
 
);


export default DataService;
