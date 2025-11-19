import { Container, Card, ListGroup, Button, Alert, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import TicketSelector from '../components/TicketSelector';
import CartItem from '../components/CartItem';

export default function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('festivalCart');
    return saved ? JSON.parse(saved) : [];
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const prices = {
    1: 75,
    2: 140,
    3: 200
  };

  const handleAddToCart = (days) => {
    const newItem = {
      id: Date.now(),
      days: days
    };
    setCartItems(prev => {
      const newCart = [...prev, newItem];
      localStorage.setItem('festivalCart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => {
      const newCart = prev.filter(item => item.id !== itemId);
      localStorage.setItem('festivalCart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleDiscardCart = () => {
    setCartItems([]);
    localStorage.removeItem('festivalCart');
  };

  const handlePurchase = () => {
    setCartItems([]);
    localStorage.removeItem('festivalCart');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const total = cartItems.reduce((sum, item) => sum + prices[item.days], 0);

  return (
    <>
      <NavigationBar />
      <Container>
        <h1 className="my-4 text-center" style={{ color: '#6bcf7f' }}>🛒 Shopping Cart</h1>
        
        {showSuccess && (
          <Alert variant="success" className="mb-4">
            <Alert.Heading>Purchase Confirmed! 🎉</Alert.Heading>
            <p>Thank you for your purchase! See you at the festival!</p>
          </Alert>
        )}

        <Row>
          <Col md={6}>
            <TicketSelector onAddToCart={handleAddToCart} />
          </Col>
          <Col md={6}>
            <Card style={{ borderColor: '#6bcf7f' }}>
              <Card.Header>
                <Card.Title className="mb-0">Your Cart</Card.Title>
              </Card.Header>
              {cartItems.length === 0 ? (
                <Card.Body>
                  <Card.Text className="text-muted">Your cart is empty. Add tickets to get started!</Card.Text>
                </Card.Body>
              ) : (
                <>
                  <ListGroup variant="flush">
                    {cartItems.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onRemove={handleRemoveItem}
                      />
                    ))}
                  </ListGroup>
                  <Card.Footer className="d-flex justify-content-between align-items-center">
                    <strong>Total: ${total}</strong>
                    <div>
                      <Button variant="outline-secondary" className="me-2" onClick={handleDiscardCart}>
                        Discard Cart
                      </Button>
                      <Button variant="success" onClick={handlePurchase}>
                        Purchase Order
                      </Button>
                    </div>
                  </Card.Footer>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

