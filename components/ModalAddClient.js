/**
 * Nome do arquivo: components/ModalAddClient.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por gerar a visualização
 * do conteúdo do Modal no processo de Criar Cliente
 *
 * Este script é parte o curso de ADS.
 */

const ModalAddClient = ({
  setCurrentUserAdd,
  currentUserAdd,
  addClient,
  formError,
}) => {
  return (
    <form onSubmit={addClient}>
      <div className="row">
        <input
          type="text"
          placeholder="Nome Completo"
          value={currentUserAdd.name}
          onChange={(e) => {
            setCurrentUserAdd({
              ...currentUserAdd,
              name: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.nameError}</span>
      </div>
      <div className="row">
        <input
          type="text"
          placeholder="E-mail"
          value={currentUserAdd.email}
          onChange={(e) => {
            setCurrentUserAdd({
              ...currentUserAdd,
              email: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.emailError}</span>
      </div>
      <div className="row">
        <input
          type="text"
          placeholder="Endereco"
          value={currentUserAdd.address}
          onChange={(e) => {
            setCurrentUserAdd({
              ...currentUserAdd,
              address: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.addressError}</span>
      </div>
      <div className="row">
        <input
          type="text"
          placeholder="Telefone"
          value={currentUserAdd.phone}
          onChange={(e) => {
            setCurrentUserAdd({
              ...currentUserAdd,
              phone: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.phoneError}</span>
      </div>
      <input type="submit" value="Criar Usuário" />
    </form>
  );
};

export default ModalAddClient;
