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

import { db } from "@/util/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

export default function handler(req, res) {
  if (req.method === "GET") {
    onSnapshot(query(collection(db, "clients")), (snapshot) => {
      const data = [];
      snapshot.docs.map((client) => {
        data.push({
          id: client.id,
          ...client.data(),
        });
      });
      res.status(200).json({ message: data });
    });
  } else {
    res.status(412).json("Método Inválido de Solicitação");
  }
}
