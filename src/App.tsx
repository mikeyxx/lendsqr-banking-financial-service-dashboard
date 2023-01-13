import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import UserFilter from "./pages/UserFilter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={<Dashboard menu={menu} setMenu={setMenu} />}
          />
          <Route path="/filter" element={<UserFilter />} />
          <Route path="/details" element={<UserDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;