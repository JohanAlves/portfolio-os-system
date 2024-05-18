/**
 * Nome do arquivo: api/client/create.js
 * Data de criação: 03/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de criação de ordens de serviço no banco de dados
 *
 * Este script é parte o curso de ADS.
 */

import { createOrder } from "@/repository/os";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { client, price, description } = req.body;
    const response = await createOrder(client, price, description);

    if (response.status === 200)
      res.status(response.status).json(response.data);
    else res.status(response.status).json(response.error);
  } else res.status(412).json("Método Inválido de Solicitação");
}
