import react from 'react';
import { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post('/registrationform', {
          login: username,
          password: password,
        })
        .then(function (response) {
          setRes(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password" // Лучше использовать type="password" для пароля
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <button type="submit">Registration</button>
      </form>
      <div>{res}</div>
    </div>
  );
}

export default Registration;
