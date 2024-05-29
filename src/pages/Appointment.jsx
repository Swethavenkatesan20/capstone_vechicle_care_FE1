// src/pages/Appointment.jsx

import React, { useState, useEffect } from 'react';
import appointmentServices from '../services/appointmentServices';
import serviceServices from '../services/serviceServices';

const Appointment = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the list of services when the component mounts
    serviceServices.getAllServices().then(response => {
      setServices(response.data.data);
    }).catch(error => {
      console.error('Error fetching services:', error);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Find the selected service to get its ID
      const selectedServiceObj = services.find(service => service._id === selectedService);
      if (!selectedServiceObj) {
        throw new Error('Selected service not found');
      }

      const userId = localStorage.getItem('userId'); // Get the logged-in user's ID
      const serviceId = selectedServiceObj._id; // Get the selected service's ID
      const appointmentData = { date, time };
      
      // Call createAppointment with userId, serviceId, date, and time
      const response = await appointmentServices.createAppointment(userId, serviceId, date, time);
      console.log('Response from backend:', response);
      setMessage('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('Failed to book appointment.');
    }
  };

  return (
    <div className="container">
      <h1>Book an Appointment</h1>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">Service</label>
          <select
            id="service"
            className="form-select"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service._id} value={service._id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input
            type="time"
            id="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Book Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
