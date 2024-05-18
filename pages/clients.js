/**
 * Nome do arquivo: pages/clients.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por mostrar
 * a página contendo todos os clientes
 *
 * Este script é parte o curso de ADS.
 */

import Head from "next/head";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalEditClient from "@/components/ModalEditClient";
import ModalAddClient from "@/components/ModalAddClient";
import AllClients from "@/components/AllClients";
import { toast } from "react-toastify";
import toastConfig from "@/util/toastConfig";
import formValidation from "@/util/formValidation";

export default function Home() {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [currentUserAdd, setCurrentUserAdd] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [formError, setFormError] = useState({
    hasError: false,
    nameError: "",
    emailError: "",
    addressError: "",
    phoneError: "",
  });
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [currentUserEdit, setCurrentUserEdit] = useState({});
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function getClients() {
      setLoading(true);
      const clientsData = await axios.get("/api/client/get");
      setClients(clientsData.data);
      setLoading(false);
    }
    getClients();
  }, []);

  function openEditClientModal(client) {
    clearFormErrors();
    setCurrentUserEdit(client);
    setIsOpenEditModal(true);
  }

  function openAddClientModal() {
    clearFormErrors();
    setCurrentUserAdd({
      name: "",
      address: "",
      phone: "",
      email: "",
    });
    setIsOpenAddModal(true);
  }

  function clearFormErrors() {
    setFormError({
      hasError: false,
      nameError: "",
      emailError: "",
      addressError: "",
      phoneError: "",
    });
  }

  async function updateClient(e) {
    e.preventDefault();
    clearFormErrors();

    const nameValidation = formValidation("Nome", currentUserEdit.name, "text");
    const emailValidation = formValidation(
      "Email",
      currentUserEdit.email,
      "email"
    );
    const addressValidation = formValidation(
      "Endereço",
      currentUserEdit.address,
      "text"
    );
    const phoneValidation = formValidation(
      "Telefone",
      currentUserEdit.phone,
      "text"
    );

    if (
      nameValidation.hasError ||
      emailValidation.hasError ||
      addressValidation.hasError ||
      phoneValidation.hasError
    ) {
      setFormError({
        hasError: true,
        nameError: nameValidation.error,
        emailError: emailValidation.error,
        addressError: addressValidation.error,
        phoneError: phoneValidation.error,
      });
    } else {
      try {
        const response = await axios.post("/api/client/update", {
          ...currentUserEdit,
        });
        setIsOpenEditModal(false);
        setClients(
          clients.map((client) =>
            currentUserEdit.id === client.id ? currentUserEdit : client
          )
        );
        toast.success(response.data, toastConfig);
      } catch (err) {
        toast.error("Erro: " + err.response.data + ". " + err, toastConfig);
      }
    }
  }

  async function addClient(e) {
    e.preventDefault();

    clearFormErrors();

    const nameValidation = formValidation("Nome", currentUserAdd.name, "text");
    const emailValidation = formValidation(
      "Email",
      currentUserAdd.email,
      "email"
    );
    const addressValidation = formValidation(
      "Endereço",
      currentUserAdd.address,
      "text"
    );
    const phoneValidation = formValidation(
      "Telefone",
      currentUserAdd.phone,
      "text"
    );

    if (
      nameValidation.hasError ||
      emailValidation.hasError ||
      addressValidation.hasError ||
      phoneValidation.hasError
    ) {
      setFormError({
        hasError: true,
        nameError: nameValidation.error,
        emailError: emailValidation.error,
        addressError: addressValidation.error,
        phoneError: phoneValidation.error,
      });
    } else {
      try {
        const response = await axios.put("/api/client/create", {
          ...currentUserAdd,
        });

        setIsOpenAddModal(false);
        setClients([...clients, { ...currentUserAdd, id: response?.data?.id }]);
        toast.success(response.data.message, toastConfig);
      } catch (err) {
        toast.error("Erro: " + err.response.data + ". " + err, toastConfig);
      }
    }
  }

  async function removeClient(e, id) {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/client/delete?id=${id}`);
      toast.success(response.data, toastConfig);
      const removedClient = clients.find((client) => client.id === id);
      setClients((prev) => prev.filter((client) => client !== removedClient));
    } catch (err) {
      toast.error("Erro: " + err.response.data + ". " + err, toastConfig);
    }
  }

  if (loading) return <h3>Carregando...</h3>;

  return (
    <>
      <Head>
        <title>OS System</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AllClients
        openAddClientModal={openAddClientModal}
        openEditClientModal={openEditClientModal}
        removeClient={removeClient}
        clients={clients}
      />

      {isOpenEditModal && (
        <Modal setModalOpen={setIsOpenEditModal}>
          <ModalEditClient
            updateClient={updateClient}
            currentUserEdit={currentUserEdit}
            setCurrentUserEdit={setCurrentUserEdit}
            formError={formError}
          />
        </Modal>
      )}
      {isOpenAddModal && (
        <Modal setModalOpen={setIsOpenAddModal}>
          <ModalAddClient
            setCurrentUserAdd={setCurrentUserAdd}
            currentUserAdd={currentUserAdd}
            addClient={addClient}
            formError={formError}
          />
        </Modal>
      )}
    </>
  );
}
