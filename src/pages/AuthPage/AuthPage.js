import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main className={styles.AuthPage}>
      <div className={styles.BackgroundImage}>
        <img src="https://i.imgur.com/l1Ql7dB.png" alt="Background" className={styles.Image} />
      </div>
      <div className={styles.TopRightContainer}>
        <div className={styles.LogoPosition}>
          <Logo />
        </div>
        <h1 className={styles.Title}>Taste Trekker</h1>
      </div>
      <div className={styles.AuthContainer}>
        <h3>
          {showLogin ? 'LOG IN' : 'SIGN UP'}
        </h3>
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
        {showLogin ? (
          <p>Don't have an account? <span onClick={() => setShowLogin(false)}>Sign up</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setShowLogin(true)}>Log in</span></p>
        )}
      </div>
    </main>
  );
}

