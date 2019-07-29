import React from 'react';

function Product(props) {
  return (
    <div>
      <h2
      // style={{
      //   display: props.pros.name ? 'block' : 'none',
      //   color: props.pros.name ? 'black' : 'red',
      // }}
      >
        Product : {props.pros.name}
      </h2>
      <br />
      <h3
      // style={{
      //   color: !props.pros.name && 'red',
      // }}
      >
        About : {props.pros.desc}
      </h3>
      <br />
      <h4>Price : {Math.round(props.pros.price)} €</h4>
      <hr />
    </div>
  );
}

export default Product;
