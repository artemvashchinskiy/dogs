import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <nav>
        <ul>
          <li>Section 1</li>
          <li>Section 2</li>
          <li>Section 3</li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>Section 1 Content</h2>
          <p>This is the content of section 1.</p>
        </section>
        <section>
          <h2>Section 2 Content</h2>
          <p>This is the content of section 2.</p>
        </section>
        <section>
          <h2>Section 3 Content</h2>
          <p>This is the content of section 3.</p>
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
