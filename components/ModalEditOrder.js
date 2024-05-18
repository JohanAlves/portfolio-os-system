/**
 * Nome do arquivo: components/ModalEditOrder.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por gerar a visualização
 * do conteúdo do Modal no processo de Editar Ordem
 *
 * Este script é parte o curso de ADS.
 */

import axios from "axios";
import { useEffect, useState } from "react";

const ModalEditOrder = ({
  updateOrder,
  currentOrderEdit,
  setCurrentOrderEdit,
  formError,
}) => {
  const [clients, setClients] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getClients() {
      setLoading(true);
      const clientsData = await axios.get("/api/client/get");
      setClients(clientsData.data);
      setLoading(false);
    }
    getClients();
  }, []);

  if (loading) return <h3>Carregando...</h3>;

  return (
    <form onSubmit={updateOrder}>
      <div className="row">
        <select
          defaultValue={currentOrderEdit.client}
          onChange={(e) => {
            setCurrentOrderEdit({
              ...currentOrderEdit,
              client: e.target.value,
            });
          }}
        >
          <option value="">Selecione um Cliente</option>
          {clients.map((client) => {
            return (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            );
          })}
        </select>
        <span className="formError">{formError.clientError}</span>
      </div>

      <div className="row">
        <input
          type="number"
          placeholder="Preço"
          value={currentOrderEdit.price}
          onChange={(e) => {
            setCurrentOrderEdit({
              ...currentOrderEdit,
              price: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.priceError}</span>
      </div>

      <div className="row">
        <select
          defaultValue={currentOrderEdit.status}
          onChange={(e) => {
            setCurrentOrderEdit({
              ...currentOrderEdit,
              status: e.target.value,
            });
          }}
        >
          <option value="">Selecione um Status</option>
          <option value="Não Iniciada">Não Iniciada</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Concluída">Concluída</option>
        </select>
        <span className="formError">{formError.statusError}</span>
      </div>

      <div className="row">
        <textarea
          rows={6}
          placeholder="Descrição"
          value={currentOrderEdit.description}
          onChange={(e) => {
            setCurrentOrderEdit({
              ...currentOrderEdit,
              description: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.descriptionError}</span>
      </div>
      <input type="submit" value="Alterar Ordem" />
    </form>
  );
};

export default ModalEditOrder;
