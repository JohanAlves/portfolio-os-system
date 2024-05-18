const formValidation = (name, value, type) => {
  if (!value)
    return {
      hasError: true,
      error: name + " é obrigatório",
    };

  if (type === "email") {
    const check =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!check.test(value))
      return {
        hasError: true,
        error: name + " não é válido",
      };
  }
  return {
    hasError: false,
    error: "",
  };
};

export default formValidation;
