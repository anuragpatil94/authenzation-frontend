const testUser = {
  id: 1,
  name: 'Anurag',
};

const login = ({ username, password }) => {
  // Check in database
  console.log('You just Logged In');
  return testUser;
};

const register = ({ username, password }) => {
  // create new user in database
  console.log('You just Registered');
  return testUser;
};

const logout = () => {
  console.log('You just Logged Out');
  return true;
};

export default { login, register, logout };
