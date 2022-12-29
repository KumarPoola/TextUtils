import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import Csswrk from './components/Csswrk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// let name = "MR.K";
function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enabled or not.

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Text - Home Dark Mode";
      // setInterval(()=>{
      //   document.title = "Hello";
      // },2000);
      // setInterval(()=>{
      //   document.title = "People";
      // },1500);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "Text - Home White Mode";
    }
  }
  const togglemodea = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#bb7e7e';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title = "TextUtils" About = "AboutText" /> */}
        {/* <Navbar/> */}
        {/* <Csswrk mode={mode} toggleMode={togglemodea}/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <TextForm showAlert={showAlert} heading="Enter The Text For Analyse" mode={mode} /> */}
          {/* <About/> */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              {/* <TextForm showAlert={showAlert} heading="Enter The Text For Analyse" mode={mode} /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
