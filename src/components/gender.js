import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gender() {
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/runchart');
        setResult(response.data.result);
      } catch (error) {
        console.error('Lỗi:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Kết quả từ API:</h1>
      <p>{result}</p>
    </div>
  );
}

export default Gender;
