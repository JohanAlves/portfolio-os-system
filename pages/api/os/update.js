/**
 * Nome do arquivo: api/os/update.js
 * Data de criação: 03/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de atualização de ordens de serviço no banco de dados
 *
 * Este script é parte o curso de ADS.
 */

import { updateOrder } from "@/repository/os";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, client, price, description, status, dateCreation } = req.body;

    const response = await updateOrder(
      id,
      client,
      price,
      description,
      status,
      dateCreation
    );
    if (response.status === 200)
      res.status(response.status).json(response.data);
    else res.status(response.status).json(response.error);
  } else res.status(412).json("Método Inválido de Solicitação");
}
