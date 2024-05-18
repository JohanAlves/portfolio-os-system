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

import { db } from "@/util/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { client, price, description } = req.body;

    if (!client || !price || !description)
      res.status(400).json("O formulário possui campos vazios");
    else {
      const dateCreation = serverTimestamp();
      const status = "Não Iniciada";

      const addOrder = await addDoc(collection(db, "os"), {
        client,
        dateCreation,
        description,
        price: parseFloat(price),
        status,
      }).catch((error) => {
        res.status(500).json(error);
      });

      res.status(200).json({
        id: addOrder.id,
        message: "Ordem Criada com Sucesso!",
      });
    }
  } else res.status(412).json("Método Inválido de Solicitação");
}
