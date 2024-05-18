/**
 * Nome do arquivo: components/AllClients.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar um modal
 * que auxilia na experiência do usuário
 *
 * Este script é parte o curso de ADS.
 */

import styles from "./Modal.module.css";

const Modal = ({ setModalOpen, children }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div
          className={styles.closeButton}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          x
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
