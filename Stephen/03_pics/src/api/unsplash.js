import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID zxBhMMeZ3Sr2RQBYSX2wD_0VlXN3IKxCXujbJJGIDqI',
  },
});
