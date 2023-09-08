import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

import { Button } from './components';

const App = () => {
  return (
    <>
      <Navbar expand sticky="top" variant="light" bg="light">
        <Container>
          <Navbar.Brand className="logo" />
          <Container
            id="navbarNav"
            className="d-flex w-100 align-items-center justify-content-between"
          >
            <Nav.Link href="/" className="mr-auto mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="https://www.auth.rocks" target="_blank">
              auth.rocks
              <i className="fa-solid fa-up-right-from-square fa-sm" />
            </Nav.Link>
            <Nav.Item>
              <Button id="qsLoginBtn" className="btn-block btn-margin">
                Login
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle>
                  <img
                    alt="Avatar"
                    className="nav-user-profile profile-image rounded-circle"
                    width="50"
                  />
                  Danny Fuhriman
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <i className="fas fa-user mr-4"></i> Profile
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <i className="fas fa-recycle mr-4"></i> Refresh Tokens
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <i className="fas fa-power-off mr-4"></i> Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Container>
        </Container>
      </Navbar>
      <Container fluid className="h-100 d-flex flex-column">
        <Container id="main-content" className="mt-5 flex-grow-1">
          <Container id="content-home">
            <Container className="text-center hero">
              <img
                className="mb-3 app-logo"
                src="https://cdn.glitch.global/daf663d9-c107-4fc9-87cb-b7395a5c1ccb/funauth-logo.png?v=1661435630972"
                alt="funAuth/AuthRocks logo"
                width="75"
              />
              <h1 className="mb-4">Welcome to auth.rocks!</h1>
              <p id="content-lead" className="lead">
                This is a sample application that demonstrates an authentication
                flow for a React SPA.
              </p>
              <Container>
                <h4 className="col my-5 text-center">
                  Please login to continue.
                </h4>
              </Container>
              <Container id="auth-content" className="px-2">
                <h2 id="content-title" className="col mt-5 text-center">
                  Congratulations, you've logged in!
                </h2>

                <Row>
                  {/* <!-- Begin Challenge 1: Token Section --> */}
                  <Col id="challenge1Section" className="mb-4">
                    <h4 className="mb-3">
                      Challenge 1: Custom Application Sign-on
                    </h4>
                    <p>
                      You're seeing this content because you're currently
                      <strong>logged in</strong>.
                    </p>
                    <label>
                      <h5>Access token:</h5>
                      <pre>
                        <code id="ipt-access-token" className="json"></code>
                      </pre>
                    </label>
                    <label>
                      <h5>User profile:</h5>
                      <pre className="rounded">
                        <code id="ipt-user-profile" className="json"></code>
                      </pre>
                    </label>

                    {/* <!-- End Challenge 1: Token Section -->           */}
                  </Col>
                </Row>
                {/* <!-- Begin Challenge 2: API Section --> */}

                <Row>
                  <Col id="challenge2Section" className="mb-4">
                    <h4 className="mb-3">Challenge 2: Protect The API</h4>

                    <Container>
                      <label>Public API</label>
                      <p>
                        The first API is available to any calls, even without
                        authentication.
                      </p>
                      <Container className="mb-5 d-flex justify-content-center">
                        {/* TODO: Loading state */}
                        <Button id="public-api-btn" className="mt-5">
                          Try API
                        </Button>
                      </Container>
                      <label>Private API</label>
                      <p>
                        The second API requires authentication, and will only
                        respond successfully with an access token from the
                        configured tenant.
                      </p>
                      <Container className="mb-5 d-flex justify-content-center">
                        <Button id="private-api-btn" className="mt-5">
                          Try API
                        </Button>
                      </Container>
                      <label>Scoped API</label>
                      <p>
                        The last API not only requires authentication, but also
                        requires the proper authorization scopes/permissions in
                        the access token.
                      </p>
                      <Container className="mb-5 d-flex justify-content-center">
                        <Button id="scoped-api-btn" className="mt-5">
                          Try API
                        </Button>
                      </Container>
                      <Container className="result-block-container d-flex justify-content-start">
                        <Container className="result-block reset-on-nav w-100">
                          <h6 className="muted" id="anchor-results">
                            Result
                          </h6>
                          <pre>
                            <code
                              className="js rounded"
                              id="api-call-result"
                            ></code>
                          </pre>
                          <Container className="justify-content-center">
                            <Button
                              id="back-to-top-btn"
                              href="#challenge2Section"
                              variant="secondary"
                            >
                              Back to Top
                            </Button>
                          </Container>
                        </Container>
                      </Container>
                    </Container>
                  </Col>
                </Row>
                {/* <!-- End Challenge 2: API Section --> */}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default App;
