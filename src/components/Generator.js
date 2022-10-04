import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from '../utils.js/Character';
export default function Generator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const maxPasswordLength = 26;
  const minPasswordLength = 8;

  const handleGeneratePassword = (event) => {
    event.preventDefault();
  };

  const createPassword = (characterList) => {
    let password = '';
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password += characterList.charAt(characterIndex);
    }
    return password;
  };
  return (
    <>
      <Card style={{ width: '18rem' }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center">
            React Password Generator
          </Card.Title>
          <div>
            <h3>{password}</h3>
          </div>
          <Form
            className="d-flex flex-column mt-3"
            onSubmit={handleGeneratePassword}
          >
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="passwordLength"
            >
              <Form.Label>Password length</Form.Label>
              <Form.Control
                type="number"
                className="form-control-sm"
                onChange={(e) => setPasswordLength(e.target.value)}
                defaultValue={passwordLength}
                min={minPasswordLength}
                max={maxPasswordLength}
                style={{ width: '4rem' }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="includeUpperCase"
            >
              <Form.Label>Add Uppercase Letters</Form.Label>
              <Form.Control
                type="checkbox"
                className="form-check-input"
                onChange={(e) => setIncludeUpperCase(e.target.checked)}
                checked={includeUpperCase}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="includeLowerCase"
            >
              <Form.Label>Add Lowercase Letters</Form.Label>
              <Form.Control
                type="checkbox"
                className="form-check-input"
                onChange={(e) => setIncludeLowerCase(e.target.checked)}
                checked={includeLowerCase}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="includeNumbers"
            >
              <Form.Label>Include Numbers</Form.Label>
              <Form.Control
                type="checkbox"
                className="form-check-input"
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                checked={includeNumbers}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="includeSymbols"
            >
              <Form.Label>Include Symbols</Form.Label>
              <Form.Control
                type="checkbox"
                className="form-check-input"
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                checked={includeSymbols}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Generate Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
