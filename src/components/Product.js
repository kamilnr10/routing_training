import React from "react";

const Product = (props) => {
  //   console.log(props);
  return (
    <div>
      <article className="product">
        <h2>{props.id}</h2>
      </article>
    </div>
  );
};

export default Product;
