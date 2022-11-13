import { User } from './users.model';

describe('Users.Model', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
