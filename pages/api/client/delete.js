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

import { db } from "@/util/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    const addClient = await deleteDoc(doc(db, "clients", id)).catch((error) => {
      res.status(500).json(error);
    });

    res.status(200).json("Cliente Removido com Sucesso!");
  } else res.status(412).json("Método Inválido de Solicitação");
}
