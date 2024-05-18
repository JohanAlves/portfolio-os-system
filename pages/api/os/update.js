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

import { db } from "@/util/firebase";
import { setDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, client, price, description, status, dateCreation } = req.body;

    if (!client || !price || !description || !status)
      res.status(403).json("O formulário possui campos vazios");
    else {
      await setDoc(doc(db, "os", id), {
        client,
        dateCreation,
        description,
        price: parseFloat(price),
        status,
      }).catch((error) => {
        res.status(500).json(error);
      });

      res.status(200).json("Ordem Alterada com Sucesso!");
    }
  } else res.status(412).json("Método Inválido de Solicitação");
}
