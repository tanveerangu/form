// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My App</h1>
      <nav>
        <Link href="/register" passHref>
          <div style={styles.link}>Register</div>
        </Link>
        <Link href="/login" passHref>
          <div style={styles.link}>Login</div>
        </Link>
      </nav>
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
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'blue',
    cursor: 'pointer',
  },
};