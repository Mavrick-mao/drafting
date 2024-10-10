import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // ユーザー名とパスワードの検証
    if (username === 'AdachiLab' && password === 'AdachiLab') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('ユーザー名またはパスワードが間違っています');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>ログイン</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label>ユーザー名:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>パスワード:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">ログイン</button>
        </form>
      ) : (
        <div>
          <h2>ようこそ、AdachiLab！</h2>
          <button onClick={handleLogout}>ログアウト</button>
        </div>
      )}
    </div>
  );
}

export default Login;
