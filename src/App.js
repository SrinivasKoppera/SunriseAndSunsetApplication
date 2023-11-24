import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/explore";
import NoCitiesView from "./components/Nocities";
import FailureView from "./components/Failure";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:city" element={<Explore />} />
        <Route exact path="/no-cities" element={<NoCitiesView />} />
        <Route path="/failure" element={<FailureView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
