import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for redirection
import { auth } from '../service/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => {
        router.push('/login'); // Redirect to login page after a short delay
      }, 2000); // Adjust delay as needed
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Register</h1>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
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
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formData.phone}
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
        <button type="submit" style={styles.button}>Register</button>
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
