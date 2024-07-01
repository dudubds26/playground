// src/App.js
import React, { useEffect, useState } from 'react';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec');

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.error('There was an error fetching the products', error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;