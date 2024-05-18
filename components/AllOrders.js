/**
 * Nome do arquivo: components/AllOrders.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar gerar a visualização
 * de uma lista que apresenta todas as OSs cadastradas
 *
 * Este script é parte o curso de ADS.
 */

import styles from "./AllOrders.module.css";

const AllOrders = ({
  openAddOrderModal,
  openEditOrderModal,
  removeOrder,
  orders,
}) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>Ordens de Serviço</h1>
          <span onClick={openAddOrderModal} className={styles.add}>
            Nova OS +
          </span>
        </div>
        <div className={styles.listContainer}>
          {orders.map((order) => {
            const orderDate = new Date(
              order?.dateCreation?.seconds * 1000
            ).toLocaleDateString();

            return (
              <div className={styles.order} key={order.id}>
                <div>
                  <h2 className={styles.nameUser}>{order.description}</h2>
                  <div className={styles.orderDetails}>
                    <span>{orderDate}</span>
                    <span>R$ {order.price}</span>
                    <span>{order.status}</span>
                  </div>
                </div>
                <div className={styles.buttonsContainer}>
                  <span
                    onClick={() => openEditOrderModal(order)}
                    className={styles.edit}
                  >
                    Editar
                  </span>
                  <span
                    onClick={(e) => removeOrder(e, order.id)}
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

export default AllOrders;
