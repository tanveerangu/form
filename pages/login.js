import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for redirection
import { auth } from '../service/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess('Login successful! Redirecting to home...');
      setTimeout(() => {
        router.push('/home'); // Redirect to home page after a short delay
      }, 2000); // Adjust delay as needed
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
};
