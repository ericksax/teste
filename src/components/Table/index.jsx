import { format } from "date-fns";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { api } from "../../services/api";
import { Icon } from "../CustomIcon";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export function CustomTable({ users }) {
  const [ordenar, setOrdenar] = useState(false);

  const formatedUsers = users?.map((user) => {
    return {
      ...user,
      createdAt: format(new Date(user.createdAt), "dd/MM/yyyy - HH:mm", {
        locale: ptBR,
      }),
    };
  });

  function userOrdenation(users) {
    users?.sort(function (a, b) {
      return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
    });
  }

  function handleDestroy(id) {
    api
      .delete("/user", { data: { id } })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h3>Tabela com os últimos cinco registros: </h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              Nome
              <Icon setOrdenar={setOrdenar} ordenar={ordenar} />
            </th>
            <th>Registro</th>
            <th>Login</th>
            <th>Email</th>
            <th>
              Data
              <Icon setOrdenar={setOrdenar} ordenar={ordenar} />
            </th>
            <th>Deletar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {ordenar === true ? userOrdenation(formatedUsers) : null}
          {formatedUsers?.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.register}</td>
              <td>{user.login}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>
                <FaRegTrashAlt onClick={() => handleDestroy(user._id)} />
              </td>
              <td>
                <Link passHref href={`/update/${user._id}`}>
                  <FaEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
