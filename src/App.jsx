import { Home } from "./components/home"
import "./App.css";

const App = () => {
  return (
    <>
      <div className="header">
        <h1>AI Blur Image Enhancer</h1>
        <h3>upload your image and let AI enhance it in seconds</h3>
      </div>

      <Home />

      <div className="footer">
       <h3>Code and Designed by DumbCoder</h3>
      </div>
    </>
  )
}

export default App;