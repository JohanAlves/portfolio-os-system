/**
 * Nome do arquivo: api/client/create.js
 * Data de criação: 03/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de criação do usuário no banco de dados
 *
 * Este script é parte o curso de ADS.
 */

import { createClient } from "@/repository/clients";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { name, address, phone, email } = req.body;
    const response = await createClient(name, address, phone, email);

    if (response.status === 200)
      res.status(response.status).json(response.data);
    else res.status(response.status).json(response.error);
  } else res.status(412).json("Método Inválido de Solicitação");
}
