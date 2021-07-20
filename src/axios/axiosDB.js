import axios from 'axios';

export default axios.create({
  baseURL: 'https://dron-app-default-rtdb.europe-west1.firebasedatabase.app/',
});
