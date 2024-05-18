/**
 * Nome do arquivo: repository/clients.js
 * Data de criação: 15/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por armazenar
 * a lógica de requisição e armazenamento dos clientes
 *
 * Este script é parte o curso de ADS.
 */

import { db } from "@/util/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

export async function createClient(name, address, phone, email) {
  const addClient = await addDoc(collection(db, "clients"), {
    name,
    address,
    phone,
    email,
  }).catch((error) => {
    return { status: 500, error };
  });
  return {
    status: 200,
    data: { id: addClient.id, message: "Cliente Criado com Sucesso!" },
  };
}

export async function deleteClient(id) {
  await deleteDoc(doc(db, "clients", id)).catch((error) => {
    return { status: 500, error };
  });
  return {
    status: 200,
    data: "Cliente Removido com Sucesso!",
  };
}

export async function getClient() {
  const allClients = await getDocs(collection(db, "clients")).catch((error) => {
    return { status: 500, error };
  });
  const data = [];
  allClients.forEach((client) => {
    data.push({
      id: client.id,
      ...client.data(),
    });
  });

  return {
    status: 200,
    data: data,
  };
}

export async function updateClient(id, name, address, phone, email) {
  await setDoc(doc(db, "clients", id), {
    name,
    address,
    phone,
    email,
  }).catch((error) => {
    return { status: 500, error };
  });
  return {
    status: 200,
    data: "Cliente Alterado com Sucesso!",
  };
}
