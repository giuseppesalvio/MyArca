import { createFeatureSelector, createSelector } from "@ngrx/store";
import { customerFeatureKey, CustomerState } from '../reducer/customer.reducer'

export const selectCustomerState = createFeatureSelector<CustomerState>(
  customerFeatureKey
);
export const selectCustomers = createSelector(
  selectCustomerState,(state: CustomerState) => state.customers
);
