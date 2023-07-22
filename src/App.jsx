import NotLogin from "./NotLogin";
import Login from "./components/Login";
import { Route,Routes } from "react-router-dom";
import Other from "./components/Other";
import CareerPage from "./components/CareerPage";
import PageNotFound from "./components/NotFound"

const App = () => (
  <div>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Login/>}></Route>
      <Route path="/" element={<NotLogin/>}></Route>
      <Route path="/FAQ" element={<Other/>}></Route>
      <Route path="/Career" element={<CareerPage/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  </div>
);

export default App;
