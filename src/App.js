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
            By running this command, you are adding both the react-bootstrap and
            bootstrap packages to your project. The react-bootstrap package allows you
            to use Bootstrap components as React components, making it easier to integrate
            Bootstrap into a React application. The bootstrap package provides the CSS styles
            that these components will use. After installation, you typically import the Bootstrap
            CSS into your main JavaScript file (like index.js or App.js) to apply the styles
            globally across your application.
            <br /> <br />
            <Alert variant="dark"> The following line can be included in your src/index.js or App.js file
              <hr />
              <p className="mb-0">
                <code>import 'bootstrap/dist/css/bootstrap.css';</code>
              </p>
            </Alert>
            When this line is executed, the Bootstrap
            CSS file is loaded into the application.
            This makes the predefined classes, such as .btn,
            .navbar, .form-control, and others, available for use in your
            React components. By doing so, you can leverage Bootstrap's grid system,
            typography, buttons, forms, and other components to style your application
            without having to write custom CSS for these elements.
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
            By installing react-dom, you enable your React application
            to interact with the browser's Document Object Model (DOM),
            allowing you to mount React components to a DOM node and update it
            efficiently as your application's state changes.
            <br /> <br />
            <Alert variant="dark">Set-up (Put this in your index.js or other navigation file)
              <hr />
              <p className="mb-0">
                <code>{code}</code>
              </p>
            </Alert>
            By importing these components, you can set up dynamic
            routing in your React application, allowing users
            to navigate through different parts of your app without
            refreshing the page.
            <br /> <br />
            <Alert variant="dark">Set-up (Put this in your index.js or other navigation file)
              <hr />
              <p className="mb-0">
                <code>{render}</code>
              </p>
            </Alert>
            this code configures the entry point of a React application
            to use React Router for navigation, with strict mode enabled
            for additional developer warnings. It sets up the application to
            respond to changes in the URL by rendering different components accordingly.
          </Accordion.Body>
        </Accordion.Item>
        {/* Finished */}
        <Accordion.Item eventKey="3">
          <Accordion.Header><strong>Final</strong></Accordion.Header>
          <Accordion.Body>
            Search for folder structure as the project goes big.
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
