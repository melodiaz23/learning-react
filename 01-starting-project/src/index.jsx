// This index.jsx act as the entry point of our React app.

import ReactDOM from "react-dom/client"; // ReactDOM is used to render our React app in the DOM.

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// App is rendered by passint JSX code to this render method.
// CreateRoot is used to create a root element in the DOM.

