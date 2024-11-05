import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import Cart from "./pages/Cart";
// import { number, requiresArg } from "yargs";
// import ArraySetLength from "es-abstract/2015/ArraySetLength";

function App() {
  // This next code makes the cart dynamic,
  // When adding useState you need to import it
  // to as seen above in React (useState)
  // this is an array:
  const [cart, setCart] = useState([]);

  // This next function allows for the AddtoCart button to work
  // below will code how to call the "add to cart" button function:
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  // This code goes through the books to match the one
  // that has been clicked, and then it adds it to the cart,
  // it's checking if the exact same item has been returned to the cart:
  // The spread operator is what makes the item collect in the cart!
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  // This function is stating if the book ID matches keep 
  // it in the book Array and remove from the cart:
  function removeItem(item) {
  setCart(cart.filter(book => book.id !== item.id ))
}


function numberOfItems() {
  let counter = 0;
  cart.forEach(item => {
    counter +=item.quantity
  })
  return counter; 
}



  // To log it and have it show up straight away you don't use
  // console.log, this produces an error. So now this will require
  // a useEffect (don't forget to import next to useState above!):
  useEffect(() => {}, [cart]);

  // Everything below executes the function
  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              changePrice={changePrice}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// This code below is one way to do it and you add it straight
// after function addToCart (book) {
//   const dupeItem = cart.find  (item => +item.id === +book.id)
//   if (dupeItem) {
//     setCart(
//       cart.map(item => {
//      if (item.id === dupeItem.id) {
//       return {
//         ...item,
//         quantity: item.quantity + 1,
//       };
//      } else {
//       return item
//      }
//     })
//   );
//   } else {
//   setCart([...cart, {...book, quantity: 1}])
// }}
// The code above ([...cart, book]) and ...item is called a spread operator so it calls the
// book as many times as you hit the "add to cart button". (Defined with ...).
// The dupeitem allows you to add duplicate item in the cart. Then useEffect code comes in
// after the }}, this is one way to do it, the other way is the one above.

// CODE REMOVED:

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
