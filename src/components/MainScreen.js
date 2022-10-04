import React from 'react';
import { Container } from 'react-bootstrap';
import GeneratorCard from './Generator';
export default function MainScreen() {
  return (
    <Container fluid className="d-flex justify-content-center">
      <GeneratorCard />
    </Container>
  );
}
