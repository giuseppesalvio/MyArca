import { loadCustomers } from './customer.actions'

describe('loadCustomers', () => {
  it('should return an action', () => {
    expect(loadCustomers().type).toBe('[Customer] Load Customers');
  });
});
