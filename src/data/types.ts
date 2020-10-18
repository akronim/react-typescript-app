import { Product, Order } from "./entities";
import { Action } from "redux";

// The StoreData interface describes the data that the data store will manage
export interface StoreData {
  products: Product[];
  order: Order;
}

// a set of values, each of which corresponds to an action that 
// the data store will support
export enum ACTIONS {
  ADD_PRODUCTS,
  MODIFY_ORDER,
  RESET_ORDER,
}

// Each enum value is used as a type argument to the Action type, which is 
// an interface provided by the Redux package


// describe the characteristics of the object for each action type
export interface AddProductsAction extends Action<ACTIONS.ADD_PRODUCTS> {
  payload: Product[];
}

export interface ModifyOrderAction extends Action<ACTIONS.MODIFY_ORDER> {
  payload: {
    product: Product;
    quantity: number;
  };
}

export interface ResetOrderAction extends Action<ACTIONS.RESET_ORDER> {}

// The StoreAction type is the intersection of the action interfaces
export type StoreAction =
  | AddProductsAction
  | ModifyOrderAction
  | ResetOrderAction;
