/**
 * Nome do arquivo: api/os/delete.js
 * Data de criação: 03/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de remoção de ordens de serviço no banco de dados
 *
 * Este script é parte o curso de ADS.
 */

import { db } from "@/util/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  console.log(req.method);
  if (req.method === "DELETE") {
    const { id } = req.query;

    await deleteDoc(doc(db, "os", id)).catch((error) => {
      res.status(500).json(error);
    });

    res.status(200).json("Ordem Removida com Sucesso!");
  } else res.status(412).json("Método Inválido de Solicitação");
}
