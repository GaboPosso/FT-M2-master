const validation = (userData) => {
  let errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regex = /\d/;

  if (!userData.userName) {
    errors.userName = "There should be an User Name...";
  }
  if (!regexEmail.test(userData.userName)) {
    errors.userName = "The user Name must be an email...";
  }
  if (userData.userName.length > 35) {
    errors.userName = "The user Name must have less than 35 characters";
  }
  if (!regex.test(userData.password)) {
    errors.password = "The password should have one or more numbers in it";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "The password should have more than 6 and less than 10 characters";
  }

  return errors;
};

export default validation;
