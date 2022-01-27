import React from "react";
import M from "materialize-css";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./suggestions.scss";
import { Container, Row } from "react-bootstrap";

const Suggestions = () => {
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
                    <h2 class="header">Leave a Suggestion!</h2>
                    <p class="grey-text text-darken-3 lighten-3" class="color">  <Container>
                        <Row>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Suggestions</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                            <button class="btn waves-effect waves-#00695c teal darken-3" type="submit" name="action">Submit
                            </button>
                        </Row>
                    </Container></p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax"><img alt="treepic" src="https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" /></div>
            </div>

        </>
    )
}

export default Suggestions;