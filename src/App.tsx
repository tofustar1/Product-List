import React from 'react';
import Header from "./components/Header/Header";
import Products from "./containers/Products/Products";

const App = () => (
    <>
      <header className="mb-5">
        <Header/>
      </header>

      <main>
        <Products/>
      </main>
    </>
);

export default App;
