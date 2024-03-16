import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Alert, Container, Row, Col } from 'react-bootstrap';

function CalculadoraFormulaCuadratica() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const handleCalcular = () => {
    // Reiniciar mensaje de error
    setError(null);

    // Convertir valores de entrada a números
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    // Verificar si los valores de entrada son números válidos
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setError('Por favor, ingresa números válidos para todos los coeficientes.');
      return;
    }

    // Verificar si el coeficiente 'a' no es cero
    if (numA === 0) {
      setError('El coeficiente \'a\' no puede ser cero.');
      return;
    }

    // Calcular el discriminante
    const discriminante = Math.pow(numB, 2) - 4 * numA * numC;

    // Verificar si el discriminante es negativo
    if (discriminante < 0) {
      setError('La ecuación no tiene raíces reales.');
      return;
    }

    // Calcular las raíces
    const raiz1 = (-numB + Math.sqrt(discriminante)) / (2 * numA);
    const raiz2 = (-numB - Math.sqrt(discriminante)) / (2 * numA);

    // Establecer el resultado
    setResultado({ raiz1, raiz2 });
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={9}>
          <h2 className="text-center mb-2">Calculadora de Fórmula Cuadrática</h2>
          <Form>
            <Form.Group controlId="formCoeficienteA">
              <Form.Label>Coeficiente 'a'</Form.Label>
              <Form.Control
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="Ingresa el coeficiente 'a'"
              />
            </Form.Group>
            <Form.Group controlId="formCoeficienteB">
              <Form.Label>Coeficiente 'b'</Form.Label>
              <Form.Control
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="Ingresa el coeficiente 'b'"
              />
            </Form.Group>
            <Form.Group controlId="formCoeficienteC">
              <Form.Label>Coeficiente 'c'</Form.Label>
              <Form.Control
                type="number"
                value={c}
                onChange={(e) => setC(e.target.value)}
                placeholder="Ingresa el coeficiente 'c'"
              />
            </Form.Group>
          </Form>
          <div className="text-center mt-3">
            <Button variant="primary" onClick={handleCalcular} className="w-100 rounded">
              Calcular
            </Button>
          </div>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {resultado && (
            <div className="mt-3">
              <h3>Raíces:</h3>
              <p>Raíz 1: {resultado.raiz1}</p>
              <p>Raíz 2: {resultado.raiz2}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CalculadoraFormulaCuadratica;
