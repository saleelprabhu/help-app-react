import axios from 'axios';

/* 
Set default values for axios
*/

export default axios.create({
    baseURL: 'http://localhost:4000/webapp'
});