import React, { useState } from 'react';

interface MultiInputFormProps {
  onSubmit: (data: { name: string; email: string; password: string; juice: string}) => void;
}

const MultiInputForm: React.FC<MultiInputFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [juice, setjuice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, password, juice});
    // Optionally reset the form
    setName('');
    setEmail('');
    setPassword('');
    setjuice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="juice"
          placeholder="juice"
          value={juice}
          onChange={(e) => setjuice(e.target.value)}
        />
        </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default MultiInputForm;
