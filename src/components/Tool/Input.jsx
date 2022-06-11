import { Field, ErrorMessage } from "formik";

function Input({ type, name, label, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} {...rest} />
      <ErrorMessage name={name} component="p" />
    </>
  );
}

export default Input;
