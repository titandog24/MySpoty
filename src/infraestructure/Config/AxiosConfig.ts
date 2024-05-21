import Axios from "axios";


const mySpoty = Axios.create({
    baseURL: 'http://10.0.2.2:8099/',
    headers: {
        "Content-Type": 'application/json'
    }
})

// mySpoty.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.error('Response error:', error.response.data);
//             console.error('Status:', error.response.status);
//             console.error('Headers:', error.response.headers);
//         } else if (error.request) {
//             // The request was made but no response was received
//             console.error('Request error:', error.request);
//         } else {
//             // Something happened in setting up the request that triggered an error
//             console.error('Error:', error.message);
//         }
//         console.error('Config:', error.config);

//         return Promise.reject(error);
//     }
// );

export {
    mySpoty
}