// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import F404 from './components/404';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Channel from "./components/Nested-components/Channel";
import Company from "./components/Nested-components/Company";
import Other from "./components/Nested-components/Other";
import News from "./components/News";
import Protected from "./components/protected/Protected";
import loadable from "react-loadable";
// import Loading from './my-loading-component';
// soo this is a waiting section if the react loadable is not work it will appear
const Loading = () => <h1>Loading wait...</h1>;

// and this is a loadable final function
const Homee = loadable({
  loader: () => import( "./components/Home"),
  loading: Loading,
});
const Newss = loadable({
  loader: () => import( "./components/News"),
  loading: Loading,
});
const Contactt = loadable({
  loader: () => import("./components/Contact"),
  loading: Loading,
});




function App() {
  // const navigate = useNavigate()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Protected Component={Home} />} />
          <Route
            exact
            path="/about"
            element={<Protected Component={About} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/news" element={<Protected Component={News} />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Navigate to={"/"} />} />
          {/* <Route path='*' element= {<redirect to = '/'/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



