import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Editor from "./components/Editor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Editor />
    </div>
  );
}

export default App;
