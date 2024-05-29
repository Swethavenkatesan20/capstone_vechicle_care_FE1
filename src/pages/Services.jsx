import React, { useState, useEffect } from 'react';
import serviceServices from '../services/serviceServices';

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    serviceServices.getAllServices().then(response => {
      setServices(response.data.data);
    }).catch(error => {
      console.error('Error fetching waste:', error);
    });
  }, []);

  const filteredServices = services.filter(service => {
    return (
      service.name.toLowerCase().includes(search.toLowerCase()) &&
      service.category.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>Services</h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Filter by category..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="list-group">
        {filteredServices.map(service => (
          <div key={service._id} className="list-group-item">
            <h5> Service: {service.name}</h5>
            <p> Description:  {service.description}</p>
            <p><strong>Category:</strong> {service.category}</p>
            <p><strong>Price:</strong> Rs.{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
