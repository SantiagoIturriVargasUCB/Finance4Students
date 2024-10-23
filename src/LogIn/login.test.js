import { Auth } from './Auth';

describe('Auth Class - Login Functionality', () => {
  let auth;

  beforeEach(() => {
    auth = new Auth();
  });

  test('should return true for valid email and password', () => {
    const result = auth.authenticate('validuser@example.com', 'ValidPassword123');
    expect(result).toBe(true);
  });

  test('should return false for invalid email or password', () => {
    const result = auth.authenticate('invaliduser@example.com', 'InvalidPassword');
    expect(result).toBe(false);
  });

  test('should return false if email is empty', () => {
    const result = auth.authenticate('', 'ValidPassword123');
    expect(result).toBe(false);
  });

  test('should return false if password is empty', () => {
    const result = auth.authenticate('validuser@example.com', '');
    expect(result).toBe(false);
  });

  test('should return false if both email and password are empty', () => {
    const result = auth.authenticate('', '');
    expect(result).toBe(false);
  });
});
