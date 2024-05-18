/**
 * Nome do arquivo: repository/os.js
 * Data de criação: 15/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por armazenar
 * a lógica de requisição e armazenamento das OSs
 *
 * Este script é parte o curso de ADS.
 */

import { db } from "@/util/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

export async function createOrder(client, price, description) {
  if (!client || !price || !description)
    return { status: 400, error: "O formulário possui campos vazios" };
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
      return { status: 500, error };
    });
    return {
      status: 200,
      data: { id: addOrder.id, message: "Ordem Criada com Sucesso!" },
    };
  }
}

export async function deleteOrder(id) {
  await deleteDoc(doc(db, "os", id)).catch((error) => {
    return { status: 500, error };
  });
  return {
    status: 200,
    data: "Ordem Removida com Sucesso!",
  };
}

export async function getOrder() {
  const allOrders = await getDocs(collection(db, "os")).catch((error) => {
    return { status: 500, error };
  });
  const data = [];
  allOrders.forEach((order) => {
    data.push({
      id: order.id,
      ...order.data(),
    });
  });

  return {
    status: 200,
    data: data,
  };
}

export async function updateOrder(
  id,
  client,
  price,
  description,
  status,
  dateCreation
) {
  if (!client || !price || !description || !status)
    return { status: 403, error: "O formulário possui campos vazios" };
  else {
    await setDoc(doc(db, "os", id), {
      client,
      dateCreation,
      description,
      price: parseFloat(price),
      status,
    }).catch((error) => {
      return { status: 500, error };
    });
    return {
      status: 200,
      data: "Ordem Alterada com Sucesso!",
    };
  }
}
