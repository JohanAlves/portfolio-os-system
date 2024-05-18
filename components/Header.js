/**
 * Nome do arquivo: components/Header.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar o cabeçalho
 *
 * Este script é parte o curso de ADS.
 */

import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>OS System</div>
      <nav className={styles.menu}>
        <Link href={"/clients"}>Clientes</Link>
        <Link href={"/"}>Ordens de Serviço</Link>
      </nav>
    </header>
  );
};

export default Header;
