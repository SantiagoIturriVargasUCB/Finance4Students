
export const authenticateUser = (email, password) => {
    const validEmail = 'validuser@example.com';
    const validPassword = 'ValidPassword123';
  
    if (!email || !password) return false;
  
    return email === validEmail && password === validPassword;
  }
  