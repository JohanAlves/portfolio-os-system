/**
 * Nome do arquivo: api/client/get.js
 * Data de criação: 03/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de obtenção de informações do usuário no banco de dados
 *
 * Este script é parte o curso de ADS.
 */

import { getClient } from "@/repository/clients";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const response = await getClient();
    if (response.status === 200)
      res.status(response.status).json(response.data);
    else res.status(response.status).json(response.error);
  } else {
    res.status(412).json("Método Inválido de Solicitação");
  }
}
