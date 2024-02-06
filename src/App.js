import NavBar from "../src/component/navbar/NavBar";
import Header from "../src/parts/header/Header";
import Gif from "../src/assets/images/Gif/17959-Good-Job-Gif.gif";
import Figure1 from "../src/assets/images/figures/figure-1.png";
import { Accordion, Alert, Figure, Image, Col } from "react-bootstrap";
import './App.css';

function App() {
  const code = `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`;
  const render = `
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );`;
  return (
    <div>
      <NavBar />
      <Header />
      <Accordion defaultActiveKey="0">
        {/* Starting ReactJs Project */}
        <Accordion.Item eventKey="0">
          <Accordion.Header><strong>Starting ReactJs Project</strong></Accordion.Header>
          <Accordion.Body>
            Starting with React JS involves understanding its core principles and
            getting hands-on experience with building user interfaces.
            React is a JavaScript library that enables developers to create large web
            applications that can change data without reloading the page.
            The main purpose of React is to be fast, scalable, and simple.
            It works only on user interfaces in the application, which means
            it can be used with other libraries or frameworks, like AngularJS in MVC.
            <br /> <br />
            <div className="Figure-css">
              <Figure>
                <Figure.Image
                  width={400}
                  height={180}
                  alt="171x180"
                  src={Figure1}
                />
                <Figure.Caption className="Figure-css">
                  Command for starting a reactjs Project.
                </Figure.Caption>
              </Figure>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* BootStrap Set-up */}
        <Accordion.Item eventKey="1">
          <Accordion.Header><strong>BootStrap Set-Up</strong></Accordion.Header>
          <Accordion.Body>
            <Alert variant="dark">Installation
              <hr />
              <p className="mb-0">
                <code>npm install react-bootstrap bootstrap</code>
              </p>
            </Alert>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> <br />
            <Alert variant="dark"> The following line can be included in your src/index.js or App.js file
              <hr />
              <p className="mb-0">
                <code>import 'bootstrap/dist/css/bootstrap.css';</code>
              </p>
            </Alert>
            Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* Navigation */}
        <Accordion.Item eventKey="2">
          <Accordion.Header><strong>Navigation / Routing</strong></Accordion.Header>
          <Accordion.Body>
            <Alert variant="dark">Installation
              <hr />
              <p className="mb-0">
                <code>npm install react-dom</code>
              </p>
            </Alert>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> <br />
            <Alert variant="dark">Set-up (Put this in your index.js or other navigation file)
              <hr />
              <p className="mb-0">
                <code>{code}</code>
              </p>
            </Alert>

            Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            <br /> <br />
            <Alert variant="dark">Set-up (Put this in your index.js or other navigation file)
              <hr />
              <p className="mb-0">
                <code>{render}</code>
              </p>
            </Alert>
            sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        {/* Finished */}
        <Accordion.Item eventKey="3">
          <Accordion.Header><strong>Final</strong></Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <div className="Figure-css">
              <br />
              Then you are ready to code!!
            </div>
            <br />
            <div className="Figure-css">
              <Col xs={6} md={4}>
                <Image src={Gif} thumbnail />
              </Col>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div >
  );
}

export default App;
