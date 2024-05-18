/**
 * Nome do arquivo: util/toastConfig.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por armazenar
 * as configurações do react-toastify
 *
 * Este script é parte o curso de ADS.
 */

import { Bounce } from "react-toastify";

const toastConfig = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Bounce,
};

export default toastConfig;
