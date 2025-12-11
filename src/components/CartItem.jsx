import { ListGroup, Button } from 'react-bootstrap';

export default function CartItem({ item, onRemove }) {
  const prices = {
    1: 75,
    2: 140,
    3: 200
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onRemove(item.id);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.days}-Day Pass</strong>
        <span className="text-muted ms-2">${prices[item.days]}</span>
      </div>
      <Button 
        variant="outline-danger" 
        size="sm" 
        onClick={() => onRemove(item.id)}
        onKeyDown={handleKeyDown}
        aria-label={`Remove ${item.days}-day pass from cart`}
      >
        Remove
      </Button>
    </ListGroup.Item>
  );
}

