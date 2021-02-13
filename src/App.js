import { useState } from "react";
import "./App.css";

import Nav from "./components/navigation/Hero";
import Body from "./components/body/Body";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className="w-full">
      <Nav isOpen={isOpen} toggler={toggler} />
      <Body />
    </div>
  );
}

export default App;
