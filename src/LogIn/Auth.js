export class Auth {
    constructor() {
      this.validEmail = 'validuser@example.com';
      this.validPassword = 'ValidPassword123';
    }
  
    authenticate(email, password) {
      if (!email || !password) 
        return false;
      return email === this.validEmail && password === this.validPassword;
    }
  }