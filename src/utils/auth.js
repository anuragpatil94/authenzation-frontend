import axios from 'axios';

const login = async ({ authType, Username, Password }) => {
  // Check in database
  const res = await axios.post(
    `http://localhost:4000/api/auth/signin`,
    {
      Username,
      Password,
    },
    {
      headers: {
        authtype: authType,
      },
    },
  );

  console.log(
    `User: ${Username} you just logged in using ${authType} Atuhentication`,
  );

  const { success, data } = res.data;

  return new Promise(
    (resolve, reject) => res.status === 200 && resolve({ success, data }),
  );
};

const register = async ({ FirstName, LastName, Username, Password }) => {
  // create new user in database
  // I think react query can be used here
  const res = await axios.post(`http://localhost:4000/api/auth/signup`, {
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
