'use client';

import { useEffect, useState } from 'react';

export default function TestClient() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/cookie/api', {
      method: 'GET',
      credentials: 'include'
    })
      .then((res) =>{ console.log(res); return res.text();}) 
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>Test API Client</h1>
      <p>Server Response: {message}</p>
    </div>
  );
}
