import React, { useState } from 'react'
import "./contect.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';





const Contect = () => {

  return (
       <div>
            <h3 className="text-center mt-5 h1 text-secondary">
                 Contact Us
            </h3>
            <div className="border contect_main">
                 <Form>
                      <Row className="mb-3">
                           <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                     type="text"
                                     placeholder=" First Name"
                                />
                           </Form.Group>

                           <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                     type="text"
                                     placeholder=" Last Name"
                                />
                           </Form.Group>
                      </Row>

                      <Row className="mb-3">
                           <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                     type="email"
                                     placeholder="Enter email"
                                />
                           </Form.Group>
                      </Row>

                      <Row className="mb-3">
                           <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                     type="password"
                                     placeholder="Password"
                                />
                           </Form.Group>
                      </Row>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                           <Form.Label>Address</Form.Label>
                           <Form.Control
                                type="textarea"
                                placeholder="Address"
                           />
                      </Form.Group>

                      <Row className="mb-3">
                           <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                           </Form.Group>

                           <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                     <option>Choose...</option>
                                     <option>...</option>
                                </Form.Select>
                           </Form.Group>
                      </Row>

                      <Button className="w-100" variant="primary" type="submit">
                           Submit
                      </Button>
                 </Form>
            </div>
       </div>
  );
}

export default Contect