/**
 * Nome do arquivo: components/ModalAddOrder.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por gerar a visualização
 * do conteúdo do Modal no processo de Criar Ordem
 *
 * Este script é parte o curso de ADS.
 */

import axios from "axios";
import { useEffect, useState } from "react";

const ModalAddOrder = ({
  setCurrentOrderAdd,
  currentOrderAdd,
  addOrder,
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
    <form onSubmit={addOrder}>
      <div className="row">
        <select
          onChange={(e) => {
            setCurrentOrderAdd({
              ...currentOrderAdd,
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
          value={currentOrderAdd.name}
          onChange={(e) => {
            setCurrentOrderAdd({
              ...currentOrderAdd,
              price: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.priceError}</span>
      </div>

      <div className="row">
        <textarea
          rows={6}
          placeholder="Descrição"
          value={currentOrderAdd.description}
          onChange={(e) => {
            setCurrentOrderAdd({
              ...currentOrderAdd,
              description: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.descriptionError}</span>
      </div>
      <input type="submit" value="Criar Ordem" />
    </form>
  );
};

export default ModalAddOrder;
