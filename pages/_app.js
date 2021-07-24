import Link from "next/link";
import "../styles/global.css";
import styles from "../styles/App.module.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={styles.wrapper}>
      {/* Container */}
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1>My Website</h1>
        </header>

        {/* Nav */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Main */}
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.inner}>
          Powered by <a href="https://nextjs.org/">Next.js</a>
        </div>
      </footer>
    </div>
  );
};

export default MyApp;
