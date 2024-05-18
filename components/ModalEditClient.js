/**
 * Nome do arquivo: components/ModalEditClient.js
 * Data de criação: 16/05/2024
 * Autor: Johan Victor
 * Matrícula: 01587621
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por gerar a visualização
 * do conteúdo do Modal no processo de Editar Cliente
 *
 * Este script é parte o curso de ADS.
 */

const ModalEditClient = ({
  updateClient,
  currentUserEdit,
  setCurrentUserEdit,
  formError,
}) => {
  return (
    <form onSubmit={updateClient}>
      <div className="row">
        <input
          type="text"
          placeholder="Nome Completo"
          value={currentUserEdit.name}
          onChange={(e) => {
            setCurrentUserEdit({
              ...currentUserEdit,
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
          value={currentUserEdit.email}
          onChange={(e) => {
            setCurrentUserEdit({
              ...currentUserEdit,
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
          value={currentUserEdit.address}
          onChange={(e) => {
            setCurrentUserEdit({
              ...currentUserEdit,
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
          value={currentUserEdit.phone}
          onChange={(e) => {
            setCurrentUserEdit({
              ...currentUserEdit,
              phone: e.target.value,
            });
          }}
        />
        <span className="formError">{formError.phoneError}</span>
      </div>
      <input type="submit" value="Alterar Usuário" />
    </form>
  );
};

export default ModalEditClient;
