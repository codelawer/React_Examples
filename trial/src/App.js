/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from 'react';
import Product from './components/Product';
import products from './components/vschoolProducts';
import './style.css';

function App() {
  const pro = products.map(item => (
    <Product key={item.id} pros={{ name: item.name, desc: item.description, price: item.price }} />
  ));

  return <div>{pro}</div>;
}
export default App;
