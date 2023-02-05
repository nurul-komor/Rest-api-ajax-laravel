import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import axios from "axios";
import Form from "./Pages/Form";
function App() {
  let userCreateHandler = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;
    const gender = e.target.gender.value;
    axios
      .post(
        "http://localhost:8000/api/users",
        username,
        email,
        password,
        address,
        gender
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/create-user"
          element={<Form submit={userCreateHandler} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
