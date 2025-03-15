import React, { useState } from "react";

const AuthForm = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(true);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (isSignup) {
      const userExists = users.find((user) => user.email === email);
      if (userExists) {
        setError("User already exists! Please login.");
        return;
      }
      setUsers([...users, { email, password }]);
      setError("");
      alert("Signup successful! Please log in.");
      setIsSignup(false);
    } else {
      const user = users.find((user) => user.email === email && user.password === password);
      if (!user) {
        setError("Invalid email or password");
        return;
      }
      setError("");
      alert("Login successful!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isSignup ? "Sign Up" : "Login"}</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p style={styles.toggleText}>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button onClick={() => setIsSignup(!isSignup)} style={styles.toggleButton}>
          {isSignup ? "Login here" : "Sign up here"}
        </button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "350px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    background: "#fff",
    marginTop: "50px",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  toggleText: {
    marginTop: "10px",
    fontSize: "14px",
  },
  toggleButton: {
    border: "none",
    background: "none",
    color: "#007BFF",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default AuthForm;
