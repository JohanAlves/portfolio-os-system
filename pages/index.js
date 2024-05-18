/**
 * Nome do arquivo: pages/index.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por mostrar
 * a página inicial da aplicação, contendo todas as ordens de serviço
 *
 * Este script é parte o curso de ADS.
 */

import Head from "next/head";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import AllOrders from "@/components/AllOrders";
import { toast } from "react-toastify";
import toastConfig from "@/util/toastConfig";
import formValidation from "@/util/formValidation";
import ModalAddOrder from "@/components/ModalAddOrder";
import ModalEditOrder from "@/components/ModalEditOrder";

export default function Home() {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [currentOrderAdd, setCurrentOrderAdd] = useState({
    client: "",
    price: 0,
    description: "",
  });
  const [formError, setFormError] = useState({
    hasError: false,
    priceError: "",
    descriptionError: "",
  });
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [currentOrderEdit, setCurrentOrderEdit] = useState({});
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      setLoading(true);
      const ordersData = await axios.get("/api/os/get");
      setOrders(ordersData.data);
      setLoading(false);
    }
    getOrders();
  }, []);

  function openEditOrderModal(order) {
    clearFormErrors();
    setCurrentOrderEdit(order);
    setIsOpenEditModal(true);
  }
  function openAddOrderModal() {
    clearFormErrors();
    setCurrentOrderAdd({
      client: "",
      price: "",
      description: "",
    });
    setIsOpenAddModal(true);
  }

  function clearFormErrors() {
    setFormError({
      hasError: false,
      priceError: "",
      descriptionError: "",
      statusError: "",
      clientError: "",
    });
  }

  async function updateOrder(e) {
    e.preventDefault();
    clearFormErrors();

    const priceValidation = formValidation(
      "Preço",
      currentOrderEdit.price,
      "number"
    );
    const descriptionValidation = formValidation(
      "Descrição",
      currentOrderEdit.description,
      "text"
    );
    const statusValidation = formValidation(
      "Status",
      currentOrderEdit.status,
      "text"
    );
    const clientValidation = formValidation(
      "Cliente",
      currentOrderEdit.client,
      "text"
    );

    if (
      priceValidation.hasError ||
      descriptionValidation.hasError ||
      statusValidation.hasError ||
      clientValidation.hasError
    ) {
      setFormError({
        hasError: true,
        priceError: priceValidation.error,
        descriptionError: descriptionValidation.error,
        statusError: statusValidation.error,
        clientError: clientValidation.error,
      });
    } else {
      try {
        const response = await axios.post("/api/os/update", {
          ...currentOrderEdit,
        });
        setIsOpenEditModal(false);
        setOrders(
          orders.map((client) =>
            currentOrderEdit.id === client.id ? currentOrderEdit : client
          )
        );
        toast.success(response.data, toastConfig);
      } catch (err) {
        toast.error("Erro: " + err.response.data + ". " + err, toastConfig);
      }
    }
  }

  async function addOrder(e) {
    e.preventDefault();

    clearFormErrors();

    const priceValidation = formValidation(
      "Preço",
      currentOrderAdd.price,
      "number"
    );
    const descriptionValidation = formValidation(
      "Descrição",
      currentOrderAdd.description,
      "text"
    );
    const clientValidation = formValidation(
      "Cliente",
      currentOrderAdd.client,
      "text"
    );

    if (
      priceValidation.hasError ||
      descriptionValidation.hasError ||
      clientValidation.hasError
    ) {
      setFormError({
        hasError: true,
        priceError: priceValidation.error,
        descriptionError: descriptionValidation.error,
        clientError: clientValidation.error,
      });
    } else {
      try {
        const response = await axios.put("/api/os/create", {
          ...currentOrderAdd,
        });
        setIsOpenAddModal(false);
        const orderDate = { seconds: new Date().getTime() / 1000 };
        setOrders([
          ...orders,
          {
            ...currentOrderAdd,
            id: response?.data?.id,
            dateCreation: orderDate,
            status: "Não Iniciada",
          },
        ]);
        toast.success(response.data.message, toastConfig);
      } catch (err) {
        toast.error("Erro: " + err.response.data + ". " + err, toastConfig);
      }
    }
  }

  async function removeOrder(e, id) {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/os/delete?id=${id}`);
      toast.success(response.data, toastConfig);
      const removedOrder = orders.find((order) => order.id === id);
      setOrders((prev) => prev.filter((order) => order !== removedOrder));
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

      <AllOrders
        openAddOrderModal={openAddOrderModal}
        openEditOrderModal={openEditOrderModal}
        removeOrder={removeOrder}
        orders={orders}
      />

      {isOpenEditModal && (
        <Modal setModalOpen={setIsOpenEditModal}>
          <ModalEditOrder
            updateOrder={updateOrder}
            currentOrderEdit={currentOrderEdit}
            setCurrentOrderEdit={setCurrentOrderEdit}
            formError={formError}
          />
        </Modal>
      )}
      {isOpenAddModal && (
        <Modal setModalOpen={setIsOpenAddModal}>
          <ModalAddOrder
            setCurrentOrderAdd={setCurrentOrderAdd}
            currentOrderAdd={currentOrderAdd}
            addOrder={addOrder}
            formError={formError}
          />
        </Modal>
      )}
    </>
  );
}
