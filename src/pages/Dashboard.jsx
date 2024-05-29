import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { protectedInstance } from '../services/instance';
import '../styles.css';



const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await protectedInstance.get('/appointments');
        setAppointments(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching appointments');
        setLoading(false);
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/appointments">Appointment</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/reviews">Customer reviews</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/statistics">Statistics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <Outlet />
      </div>
      <marquee className="alert alert-success fs-1 mt-3" role="alert" behavior="scroll" direction="left">
        10% Discount on any vehicle services. Offer ends soon!!⏰ 
      </marquee>


      
      <div className="appointment-section">
        <h3 className='text-dark fs-1 fw-bold '>Your Appointments 📆 </h3>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="appointment-list">
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <Card key={appointment._id} className="mb-3 text-success text-opacity-75">
                  <Card.Body className='bg-success p-2 text-dark bg-opacity-25'>
                    <Card.Title className='fst-italic'>Appointment</Card.Title>
                    <Card.Text>
                      <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()} <br />
                      <strong>Time:</strong> {appointment.time}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No appointments booked yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
