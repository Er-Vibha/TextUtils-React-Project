import "./App.css";
import { Navbar } from "./Components/Navbar";
import Alert from "./Components/Alert";
import { Textis } from "./Components/Textis";
import React, { useState } from "react";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const ShowAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null)
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#042743";
      ShowAlert("Dark mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.background = "white";
      ShowAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} ShowAlert={ShowAlert} />
      <div className="container">
        <Textis ShowAlert={ShowAlert}  heading="Enter Text" mode={mode} />
      </div>
    </>
  );
}
export default App;
