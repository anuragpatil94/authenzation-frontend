import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1/auth';

const login = async ({ authType, Username, Password }) => {
  // Check in database
  const res = await axios.post(
    `${API_URL}/signin`,
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
  const res = await axios.post(`${API_URL}/signup`, {
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

// const logout = async data => {
//   let res = {};
//   if (data.authType === 'basic') {
//     res = {
//       status: 200,
//       success: true,
//     };
//   } else {
//     res = await axios.post(`${API_URL}/signout`, null, {
//       headers: {
//         authtype: data.authType,
//         Authorization: `Bearer ${data.accessToken}`,
//       },
//     });
//     console.log('You just Logged Out');
//     var { success } = res.data;
//   }
//   return new Promise(
//     (resolve, reject) => res.status === 200 && resolve({ success }),
//   );
// };

export default { login, register };
