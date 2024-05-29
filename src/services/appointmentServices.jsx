// src/services/appointmentServices.js

import { protectedInstance } from './instance';

const appointmentServices = {
  createAppointment: async (userId, serviceId, date, time) => {
    try {
      const token = localStorage.getItem('token'); // Get the token from localStorage

      if (!token) {
        throw new Error('No token found');
      }

      // Create the appointment object with userId, serviceId, date, and time
      const appointment = {
        userId,
        serviceId,
        date,
        time
      };

      // Make a POST request to create the appointment
      const response = await protectedInstance.post('/appointments', appointment, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data; // Return the created appointment data
    } catch (error) {
      throw error; // Throw the error for handling in the component
    }
  },

  getAllAppointments: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    try {
      // Make a GET request to fetch the user's appointments
      const response = await protectedInstance.get('/appointments', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data; // Return the fetched appointments data
    } catch (error) {
      throw error; // Throw the error for handling in the component
    }
  }
};

export default appointmentServices;
