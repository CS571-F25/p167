import { ListGroup, Button } from 'react-bootstrap';

export default function CartItem({ item, onRemove }) {
  const prices = {
    1: 75,
    2: 140,
    3: 200
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.days}-Day Pass</strong>
        <span className="text-muted ms-2">${prices[item.days]}</span>
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => onRemove(item.id)}>
        Remove
      </Button>
    </ListGroup.Item>
  );
}

