import { BrowserRouter, Route, Routes } from "react-router-dom";

import Events from "./pages/Events";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/" element={<Landing />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
