import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css'

function Gender() {
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/runchart');
        setResult(response.data[0]);
      } catch (error) {
        console.error('Lỗi:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='containerResult'>
      <h1>Your gender is:</h1>
      <p className='result'>{result}</p>
    </div>
  );
}

export default Gender;
