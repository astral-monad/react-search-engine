import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://linkedin.com/in/wanyoungkim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wanyoung Kim
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/westher0870/react-search-engine"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://happy-aryabhata-586285.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
