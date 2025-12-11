import { Container } from 'react-bootstrap';

export default function PageHeader({ title, subtitle }) {
  return (
    <Container>
      <div className="text-center my-5">
        <h1 className="display-4 mb-4" style={{ color: '#ff6b6b' }}>
          {title}
        </h1>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </Container>
  );
}

