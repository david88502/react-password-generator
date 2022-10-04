import React from 'react';
import { Card } from 'react-bootstrap';
export default function Generator() {
  return (
    <Card style={{ width: '18rem' }} className="text-center shadow">
      <Card.Body>
        <Card.Title>React Password Generator</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
