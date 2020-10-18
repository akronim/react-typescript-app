import React, { Component, ChangeEvent } from "react";
import { Product } from "./data/entities";

// To display the details of a single product

// The props and state data are described by the Props and State interfaces,
// which are used as generic type parameters to configure the base class
// for components
interface Props {
  product: Product;
  callback: (product: Product, quantity: number) => void;
}

interface State {
  quantity: number;
}

// The ProductItem component receives props that provide it with a Product object
// and a callback function to invoke when the user clicks the Add To Cart button

/* 
The generic type arguments allow the TypeScript compiler to check the component 
when it is applied so that only properties defined by the Props interface 
are used and to ensure that updates are applied only to properties defined 
by the State interface.
*/
export class ProductItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  render() {
    return (
      <div className="card m-1 p-1 bg-light">
        <h4>
          {this.props.product.name}
          <span className="badge badge-pill badge-primary float-right">
            ${this.props.product.price.toFixed(2)}
          </span>
        </h4>
        <div className="card-text bg-white p-1">
          {this.props.product.description}
          <button
            className="btn btn-success btn-sm float-right"
            onClick={this.handleAddToCart}
          >
            Add To Cart
          </button>
          <select
            className="form-control-inline float-right m-1"
            onChange={this.handleQuantityChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    );
  }

  handleQuantityChange = (ev: ChangeEvent<HTMLSelectElement>): void =>
    this.setState({ quantity: Number(ev.target.value) });

  handleAddToCart = (): void =>
    this.props.callback(this.props.product, this.state.quantity);
}
