import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContactUS from "../components/ContactUS";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact US</title>
        <meta name="description" content="Contact US" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <ContactUS />
        </p>
      </main>
    </div>
  );
}
