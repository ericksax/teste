import { UpdateForm } from "../../src/components/UpdateForm";
import styles from "../../styles/Home.module.css";

export default function UpdatePage() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1>Edite seu Cadastro</h1>
        <UpdateForm />
      </section>
    </main>
  );
}
