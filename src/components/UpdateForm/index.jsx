import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { useEffect } from "react";
import styles from "../../../styles/Home.module.css";

export function UpdateForm({ history }) {
  const { query } = useRouter();
  const router = useRouter();
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    api.get(`/getuser/${query.id}`).then((resp) => {
      setUpdatedUser(resp.data.user);
    });
  }, [query.id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/updated", updatedUser);
    } catch (error) {
      console.log(err);
    }

    setUpdatedUser({ name: "", email: "", login: "", register: "" });
    router.push("/");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  }

  return (
    <section className={styles.sectionForm}>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={updatedUser.name}
          onChange={handleInputChange}
        />
        <label>Login:</label>
        <input
          type="text"
          name="login"
          value={updatedUser.login}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={updatedUser.email}
          onChange={handleInputChange}
        />
        <label>Registro (OAB):</label>
        <input
          type="text"
          name="register"
          value={updatedUser.register}
          onChange={handleInputChange}
        />
        <button type="submit" name="btn">
          Cadastrar
        </button>
      </form>
    </section>
  );
}
