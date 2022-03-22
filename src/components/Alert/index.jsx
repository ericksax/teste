import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export function Alert() {
  const router = useRouter();
  return (
    <div className={styles.containerError}>
      <div className={styles.content}>
        <strong>Usuário já cadastrado</strong>
        <button className={styles.btnBack} onClick={() => router.push("/")}>
          Voltar
        </button>
      </div>
    </div>
  );
}
