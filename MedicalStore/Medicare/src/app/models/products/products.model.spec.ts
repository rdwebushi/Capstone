import { Product } from './products.model';

describe('Products.Model', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
