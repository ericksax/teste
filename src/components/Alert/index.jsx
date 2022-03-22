import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export function Alert() {
  const router = useRouter();
  return (
    <div className={styles.containerError}>
      <div className={styles.content}>
        <strong>
          Usuário já cadastrado para esse e-mail, tente novamente com um email
          valido.
        </strong>
        <button className={styles.btnBack} onClick={() => router.push("/")}>
          Voltar
        </button>
      </div>
    </div>
  );
}
