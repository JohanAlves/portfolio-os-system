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

import { db } from "@/util/firebase";
import { addDoc, collection } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { name, address, phone, email } = req.body;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!name || !address || !phone || !email)
      res.status(403).json("O formulário possui campos vazios");
    else if (!emailRegex.test(email)) res.status(403).json("Email Inválido");
    else {
      const addClient = await addDoc(collection(db, "clients"), {
        name,
        address,
        phone,
        email,
      }).catch((error) => {
        res.status(500).json(error);
      });
      res
        .status(200)
        .json({ id: addClient.id, message: "Cliente Criado com Sucesso!" });
    }
  } else res.status(412).json("Método Inválido de Solicitação");
}
