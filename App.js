import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // Greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Please enter your name before logging in.");
      return;
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName("");
    setCount(0);
  };

  return (
    <div>
      {/* Header */}
      <header style={{ background: "#282c34", padding: "10px", color: "#fff", textAlign: "center" }}>
        <h1>React Multi-Component App</h1>
      </header>

      {/* Main Content */}
      <main style={{ padding: "20px", textAlign: "center" }}>
        {!isLoggedIn ? (
          <>
            <h2>Please Login</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{ padding: "10px", marginBottom: "10px", fontSize: "16px" }}
            />
            <br />
            <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
              Login
            </button>
          </>
        ) : (
          <>
            <h2>Welcome Back, {name}!</h2>
            <button onClick={handleLogout} style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}>
              Logout
            </button>

            {/* Greeting Component */}
            <div>
              <h3>Greeting</h3>
              <p>{getGreeting()}</p>
            </div>

            <hr />

            {/* Click Button Component */}
            <div>
              <h3>Click Button</h3>
              <button
                onClick={() => alert("You clicked me!")}
                style={{ padding: "10px 20px", fontSize: "16px" }}
              >
                Click Me
              </button>
            </div>

            <hr />

            {/* Counter Component */}
            <div>
              <h3>Counter</h3>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Increment
              </button>
              <button
                onClick={() => setCount(count - 1)}
                style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}
              >
                Decrement
              </button>
              <button
                onClick={() => setCount(0)}
                style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}
              >
                Reset
              </button>
            </div>

            <hr />

            {/* Additional Text */}
            <div>
              <p>
                This app showcases a multi-component structure with login/logout functionality, a personalized greeting,
                a counter, and more. Explore and enjoy React!
              </p>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{ background: "#282c34", padding: "10px", color: "#fff", textAlign: "center" }}>
        <p>&copy; 2025 React App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
