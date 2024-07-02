import React, { useState, useEffect } from 'react';
import './data.css'; // Import your CSS file for styling

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    date: '',
    name: '',
    amount: ''
  });

  // Function to fetch data from backend
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9010/api/getData');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle input changes in filters
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  // Function to filter data based on current filter values
  const filteredData = data.filter(item => {
    return (
      item.date.includes(filter.date) &&
      item.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      item.amount.toString().includes(filter.amount)
    );
  });

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator while fetching data
  }

  return (
    <div className="data-list-container">
      <h2 className="data-list-title">Data List</h2>

      {/* Filter inputs */}
      <div className="filter-container">
        <input
          type="text"
          name="date"
          value={filter.date}
          placeholder="Filter by Date"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="name"
          value={filter.name}
          placeholder="Filter by Name"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="amount"
          value={filter.amount}
          placeholder="Filter by Amount"
          onChange={handleFilterChange}
        />
      </div>

      {/* Data list */}
      <ul className="data-list">
        {filteredData.map((item, index) => (
          <li key={index} className="data-item">
            <div className="data-card">
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Amount:</strong> {item.amount}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
