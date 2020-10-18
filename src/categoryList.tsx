import React, { Component } from "react";

// To define the component that will display the list of categories

interface Props {
  selected: string;
  categories: string[];
  selectCategory: (category: string) => void;
}

export class CategoryList extends Component<Props> {
  render() {
    return (
      <div>
        {["All", ...this.props.categories].map((c) => {
          let btnClass =
            this.props.selected === c ? "btn-primary" : "btn-secondary";
          return (
            <button
              key={c}
              className={`btn btn-block ${btnClass}`}
              onClick={() => this.props.selectCategory(c)}
            >
              {c}
            </button>
          );
        })}
      </div>
    );
  }
}
