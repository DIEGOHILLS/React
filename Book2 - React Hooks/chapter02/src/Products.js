import React from "react";

function Products() {
  const products = ["Learning React", "Pro React", "Beginning React"];
  const listProducts = products.map((product) => (
    <li key={product.toString()}>{product}</li>
  ));

  return (
    <div>

      {/*  =============== EXAMPLE1: =============== */}
      {/* <h2> Products </h2> */}



      {/*  =============== EXAMPLE2: =============== */}
      <ul>{listProducts}</ul>


    </div>
  );
}

export default Products;
