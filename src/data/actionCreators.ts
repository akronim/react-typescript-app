import {
  ACTIONS,
  AddProductsAction,
  ModifyOrderAction,
  ResetOrderAction,
} from "./types";

import { Product } from "./entities";

/* 
Define the action creator functions that are responsible for creating the action 
objects that describe operations that will change the data store.

The function acts as a bridge between the application’s components and the
data store, providing a means to create actions that the data store will 
process to apply changes.
*/

export const addProduct = (...products: Product[]): AddProductsAction => ({
  type: ACTIONS.ADD_PRODUCTS,
  payload: products,
});

export const modifyOrder = (
  product: Product,
  quantity: number
): ModifyOrderAction => ({
  type: ACTIONS.MODIFY_ORDER,
  payload: { product, quantity }
});

export const resetOrder = (): ResetOrderAction => ({
  type: ACTIONS.RESET_ORDER,
});


/* 
Actions are processed by functions known as reducers, which receive the current 
state of the data store, and an action object describes the change 
that is required.
*/