import axios from 'axios';
import moment from 'moment';

const testUser = {
  id: 1,
  name: 'Anurag',
};

const login = async formData => {
  // Check in database
  console.log(`User: ${formData.Username} is logged in`);
  return testUser;
};

const register = async formData => {
  // create new user in database
  // I think react query can be used here
  console.log(`User: ${formData.Username} you just registered`);

  const res = await axios.post('http://localhost:3010/users', {
    FirstName: formData.FirstName,
    LastName: formData.LastName,
    Username: formData.Username,
    Password: formData.Password,
    CreatedAt: moment().format('MMMM Do YYYY, HH:mm:ss'),
  });
  return new Promise(
    (resolve, reject) => res.status == 201 && resolve(res.data),
  );
};

const logout = () => {
  console.log('You just Logged Out');
  return true;
};

export default { login, register, logout };
