import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home/Home";
import EditEmployee from "./pages/EditEmployee/EditEmployee";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
