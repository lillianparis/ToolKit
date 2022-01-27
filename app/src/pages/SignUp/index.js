import React from "react";
import M from "materialize-css";
import { useEffect } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";



const SignUp = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  }, []);
  return (
    <>
      <div class="parallax-container">
        <div class="parallax"><img alt="pic" src="https://images.unsplash.com/photo-1611079829529-fe31a9531295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" /></div>
      </div>
      <div class="section #6d4c41 brown darken-1">
        <div class="row container">
          <h2 class="header">SignUp</h2>
          <p class="grey-text text-darken-3 lighten-3" />
          <Container>
          <Row>
          <Form>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type ="email" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type ="password" placeholder="Last Name" />
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type ="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type ="password" placeholder="Password" />
          </Form.Group>
          </Row>
        

        

          <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type ="checkbox"/>
          </Form.Group>

          <Button variant="#00695c teal darken-3" type ="submit">
          Submit
          </Button>
          </Form>
          </Row>
          </Container>
        </div>
      </div>
      <div class="parallax-container">
        <div class="parallax"><img alt="treepic" src="https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" /></div>
      </div>

    </>
  )
}

export default SignUp;