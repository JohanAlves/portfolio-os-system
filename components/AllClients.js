/**
 * Nome do arquivo: components/AllClients.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar gerar a visualização
 * de uma lista que apresenta todos os clientes cadastrados
 *
 * Este script é parte o curso de ADS.
 */

import styles from "./AllClients.module.css";

const AllClients = ({
  openAddClientModal,
  openEditClientModal,
  removeClient,
  clients,
}) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Clientes</h1>
          <span onClick={openAddClientModal} className={styles.add}>
            Novo Cliente +
          </span>
        </div>
        <div className={styles.listContainer}>
          {clients.map((client) => {
            return (
              <div className={styles.client} key={client.id}>
                <div>
                  <h2 className={styles.nameUser}>{client.name}</h2>
                  <div className={styles.clientDetails}>
                    <span>{client.email}</span>
                    <span>{client.address}</span>
                    <span>{client.phone}</span>
                  </div>
                </div>
                <div className={styles.buttonsContainer}>
                  <span
                    onClick={() => openEditClientModal(client)}
                    className={styles.edit}
                  >
                    Editar
                  </span>
                  <span
                    onClick={(e) => removeClient(e, client.id)}
                    className={styles.remove}
                  >
                    Apagar
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default AllClients;
