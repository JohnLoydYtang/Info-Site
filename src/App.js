import NavBar from "../src/component/navbar/NavBar";
import Header from "../src/parts/header/Header";
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Figure from 'react-bootstrap/Figure';
import Figure1 from "../src/assets/images/figures/figure-1.png";
import './App.css';

function App() {
  const code = `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";`;
  return (
    <div >
      <NavBar />
      <Header />
      <Accordion defaultActiveKey="0">
        {/* Starting ReactJs Project */}
        <Accordion.Item eventKey="0">
          <Accordion.Header><strong>Starting ReactJs Project</strong></Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
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
            <Alert variant="dark"> /* The following line can be included in your src/index.js or App.js file */
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
                <code>import BrowserRouter as Router, Routes, Route from react-router-dom </code>
              </p>
            </Alert>
            sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Accordion Item #4</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Accordion Item #5</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div >
  );
}

export default App;
