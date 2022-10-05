import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from '../utils/Character';
import { COPY_SUCCESS, COPY_FAIL } from '../utils/CopyMessage';
export default function Generator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [iconIsChecked, setIconIsChecked] = useState(false);
  const maxPasswordLength = 128;
  const minPasswordLength = 8;

  const handleGeneratePassword = (event) => {
    event.preventDefault();
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify('Please select at least one checkbox', true);
    } else {
      let characterList = '';
      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      notify('Password is generated successfully', false);
    }
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

  const notify = (message, hasError = false) => {
    const toastOptions = {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (hasError) {
      toast.error(message, toastOptions);
    } else {
      toast(message, toastOptions);
    }
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const handleCopyPassword = () => {
    if (password === '') {
      notify(COPY_FAIL, true);
    } else {
      setIconIsChecked(true);
      setTimeout(() => {
        setIconIsChecked(false);
      }, 2000);
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };
  return (
    <>
      <Card style={{ width: '18rem' }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center">
            React Password Generator
          </Card.Title>
          <Alert
            variant="success"
            className="d-flex align-items-center justify-content-end mt-3"
            style={{ height: '3rem' }}
          >
            <div className="text-truncate flex-grow-1">{password}</div>
            <Button
              onClick={handleCopyPassword}
              className="btn-light bg-transparent px-0 btn-lg"
              style={{ border: 0 }}
            >
              {iconIsChecked ? (
                <i class="bi bi-check" />
              ) : (
                <i class="bi bi-clipboard" />
              )}
            </Button>
          </Alert>
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
    </>
  );
}
