/**
 * Nome do arquivo: api/client/delete.js
 * Data de criação: 03/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de remoção do usuário no banco de dados
 *
 * Este script é parte o curso de ADS.
 */

import { deleteClient } from "@/repository/clients";
import { db } from "@/util/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    const response = await deleteClient(id);

    if (response.status === 200)
      res.status(response.status).json(response.data);
    else res.status(response.status).json(response.error);
  } else res.status(412).json("Método Inválido de Solicitação");
}
