import { useRouter } from 'next/router'; // Import useRouter for redirection
import { signOut } from 'firebase/auth';
import { auth } from '../service/firebase'; // Import your Firebase auth instance
import Image from 'next/image'; // Import Image component for photo integration

export default function Home() {
  const router = useRouter(); // Initialize useRouter

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      router.push('/login'); // Redirect to login page
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };

  return (
    <div style={styles.container}>
      <Image 
        src="/path/to/your/photo.jpg" 
        alt="Background Photo" 
        layout="fill" 
        objectFit="cover" 
        style={styles.backgroundImage} 
      />
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to the Home Page</h1>
        <button 
          onClick={handleLogout} 
          style={styles.button} 
          onMouseEnter={(e) => e.target.style.backgroundColor = '#005bb5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    opacity: '0.6', // Increased opacity for better text visibility
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slightly darker background for better contrast
    padding: '30px',
    borderRadius: '12px', // Slightly larger border radius for a modern look
  },
  title: {
    fontSize: '2.5rem', // Increased font size for a more prominent title
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px', // Increased padding for better button size
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1.1rem', // Slightly larger font size for the button text
    transition: 'background-color 0.3s ease',
  }
};
