import { Card } from 'react-bootstrap';

export default function InfoCard({ title, children, borderColor }) {
  return (
    <Card className="h-100 shadow-sm" style={{ borderColor }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
}

