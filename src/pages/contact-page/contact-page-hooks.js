import { useState } from "react";

export function useContactPageLogic() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [consented, setConsented] = useState(false);
  const hasError =
    Object.values(values).some((value) => !value) ||
    !!getErrMsg({ name: "email", touched: { email: true }, values });

  function handleChange(event) {
    const { value, name } = event.target;

    setValues({ ...values, [name]: value });
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched({ ...touched, [name]: true });
  }

  return {
    consented,
    values,
    touched,
    hasError,
    toggleConsent() {
      setConsented(!consented);
    },
    handleBlur,
    handleChange,
  };
}

export function getErrMsg({ name, touched, values, message }) {
  if (name === "email") {
    return touched[name] &&
      !/^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/i.test(
        values[name].trim()
      )
      ? "Please enter a valid email"
      : "";
  }

  return touched[name] && !values[name] ? message : "";
}
