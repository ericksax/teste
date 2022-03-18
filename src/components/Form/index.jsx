import { useState } from "react";
import { api } from "../../services/api";

export function CustomForm() {
  const [user, setUser] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/user", user);
    } catch (error) {
      console.log(error);
    }

    setUser({ name: "", email: "", login: "", register: "" });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Login:</label>
      <input
        type="text"
        name="login"
        value={user.login}
        onChange={handleInputChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Registro (OAB):</label>
      <input
        type="text"
        name="register"
        value={user.register}
        onChange={handleInputChange}
      />
      <button type="submit" name="btn" onClick={() => {}}>
        Cadastrar
      </button>
    </form>
  );
}
