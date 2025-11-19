import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function TicketSelector({ onAddToCart }) {
  const [selectedDays, setSelectedDays] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(selectedDays);
    setSelectedDays(1);
  };

  const prices = {
    1: 75,
    2: 140,
    3: 200
  };

  return (
    <Card className="mb-4" style={{ borderColor: '#6bcf7f' }}>
      <Card.Header>
        <Card.Title className="mb-0">Ticket Options</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="mb-3">
          <label className="form-label">Select Pass:</label>
          <ButtonGroup className="w-100">
            <Button
              variant={selectedDays === 1 ? 'success' : 'outline-success'}
              onClick={() => setSelectedDays(1)}
            >
              1-Day Pass - ${prices[1]}
            </Button>
            <Button
              variant={selectedDays === 2 ? 'success' : 'outline-success'}
              onClick={() => setSelectedDays(2)}
            >
              2-Day Pass - ${prices[2]}
            </Button>
            <Button
              variant={selectedDays === 3 ? 'success' : 'outline-success'}
              onClick={() => setSelectedDays(3)}
            >
              3-Day Pass - ${prices[3]}
            </Button>
          </ButtonGroup>
        </div>
        <Button variant="primary" onClick={handleAddToCart} className="w-100">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

