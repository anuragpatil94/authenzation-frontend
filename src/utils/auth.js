const testUser = {
  id: 1,
  name: 'Anurag',
};

const login = formData => {
  // Check in database
  console.log(`User: ${formData.Username} is logged in`);
  return testUser;
};

const register = formData => {
  // create new user in database
  console.log(`User: ${formData.Username} you just registered`);
  return testUser;
};

const logout = () => {
  console.log('You just Logged Out');
  return true;
};

export default { login, register, logout };
