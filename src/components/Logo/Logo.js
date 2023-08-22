import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img src="https://i.imgur.com/l0CzLAO.png" alt="Taste Trekker Logo" className={styles.LogoImage} />
    </div>
  );
}
