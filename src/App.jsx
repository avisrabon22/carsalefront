import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Welcome } from "./Components/Welcome";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { LoginUser } from "./Components/User/LoginUser";
import { LoginDealership } from "./Components/Dealership/LoginDealership";
import { SignupUser } from "./Components/User/SignupUser";
import { SignupDealership } from "./Components/Dealership/SignupDealership";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin-user" element={<LoginUser/>}/>
      <Route path="/signin-dealership" element={<LoginDealership/>}/>
      <Route path="/signup-user" element={<SignupUser/>}/>
      <Route path="/signup-dealership" element={<SignupDealership/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
