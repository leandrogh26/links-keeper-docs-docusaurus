import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Links Keeper" description="Sistema gerenciador de links">
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Links Keeper</h1>
          <p>Sistema gerenciador de links</p>
        </section>
      </main>
    </Layout>
  );
}
