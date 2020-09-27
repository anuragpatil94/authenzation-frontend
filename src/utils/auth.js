import axios from 'axios';
import config from '../config';

const login = async ({ Username, Password }) => {
  // Check in database
  const res = await axios.post(`${config.dataAPI.url}/auth/signin`, {
    Username,
    Password,
  });

  console.log(`User: ${Username} you just logged in`);

  const { success, data } = res.data;

  return new Promise(
    (resolve, reject) => res.status === 200 && resolve({ success, data }),
  );
};

const register = async ({ FirstName, LastName, Username, Password }) => {
  // create new user in database
  // I think react query can be used here
  const res = await axios.post(`${config.dataAPI.url}/auth/signup`, {
    FirstName,
    LastName,
    Username,
    Password,
  });

  console.log(`User: ${Username} you just registered`);

  const { success } = res.data;

  return new Promise(
    (resolve, reject) => res.status === 200 && resolve({ success }),
  );
};

const logout = () => {
  console.log('You just Logged Out');
  return true;
};

export default { login, register, logout };
