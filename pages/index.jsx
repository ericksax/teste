import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useFetch } from "../src/hooks/useFetch";
import { CustomTable } from "../src/components/Table";
import { CustomForm } from "../src/components/Form";

export default function Home() {
  const { users } = useFetch();

  return (
    <>
      <Head>
        <title>Cadastro de Advogados</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.content}>
          <h1>Cadastro de Advogados:</h1>
          <section className={styles.sectionForm}>
            <CustomForm />
          </section>
          <section className={styles.sectionTable}>
            <CustomTable users={users} />
          </section>
        </main>
      </div>
    </>
  );
}
