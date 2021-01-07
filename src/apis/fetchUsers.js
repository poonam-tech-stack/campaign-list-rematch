import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = () =>
  axios
    .get(apiUrl)
    .then((res) => ({ users: res.data, isError: false }))
    .catch(() => ({ users: [], isError: true }));

export default fetchUsers;
