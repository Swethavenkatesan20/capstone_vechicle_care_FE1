import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import appointmentServices from '../services/appointmentServices';
import Statistics from '../components/Statistics';

const StatisticsPage = () => {
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await appointmentServices.getAllAppointments();
        setTotalAppointments(data.data.length);
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
    <div className="container mt-4">
      <h2>Statistics</h2>
      <div className="row">
        <div className="col-md-6">
          <Statistics totalAppointments={totalAppointments} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
