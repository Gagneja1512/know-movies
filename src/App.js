
import {Route , Routes} from "react-router-dom"
import Home from "./components/Home";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
