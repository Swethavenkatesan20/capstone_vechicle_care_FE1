import React from 'react';
import { Card } from 'react-bootstrap';

const Statistics = ({ totalAppointments }) => {
  return (
    <Card>
      <Card.Body className='p-3  bg-secondary text-white'>
        <Card.Title>Statistics</Card.Title>
        <Card.Text>
          <strong>Total Appointments:</strong> {totalAppointments}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Statistics;
