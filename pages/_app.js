/**
 * Nome do arquivo: pages/_app.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por adicionar
 * algumas configurações gerais na aplicação
 *
 * Este script é parte o curso de ADS.
 */

import Header from "@/components/Header";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}
