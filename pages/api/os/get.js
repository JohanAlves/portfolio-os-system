/**
 * Nome do arquivo: api/os/get.js
 * Data de criação: 03/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de obtenção de informações de ordens de serviço no banco de dados
 *
 * Este script é parte o curso de ADS.
 */

import { db } from "@/util/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

export default function handler(req, res) {
  if (req.method === "GET") {
    onSnapshot(query(collection(db, "os")), (snapshot) => {
      const data = [];
      snapshot.docs.map((os) => {
        data.push({
          id: os.id,
          ...os.data(),
        });
      });
      res.status(200).json({ message: data });
    });
  } else res.status(412).json("Método Inválido de Solicitação");
}
