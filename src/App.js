import React, { useState } from 'react';
import Login from './Login'; // Import the login component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Placeholder login logic
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>Welcome to your app!</div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;
