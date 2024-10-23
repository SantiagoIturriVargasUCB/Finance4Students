import { authenticateUser } from './login';

describe('Login Functionality', () => {
  test('should return true for valid email and password', () => {
    const result = authenticateUser('validuser@example.com', 'ValidPassword123');
    expect(result).toBe(true);  
  });

  test('should return false for invalid email or password', () => {
    const result = authenticateUser('invaliduser@example.com', 'InvalidPassword');
    expect(result).toBe(false);  
  });

  test('should return false if email is empty', () => {
    const result = authenticateUser('', 'ValidPassword123');
    expect(result).toBe(false);  
  });

  test('should return false if password is empty', () => {
    const result = authenticateUser('validuser@example.com', '');
    expect(result).toBe(false);  
  });
});
