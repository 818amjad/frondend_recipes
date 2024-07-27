import React, { useState } from 'react';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log('User registered:', { name, place, age, email });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Place:
          <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
