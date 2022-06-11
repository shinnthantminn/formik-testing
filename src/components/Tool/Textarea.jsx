import { Field, ErrorMessage } from "formik";

function Textarea({ name, label, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} as={"textarea"} />
      <ErrorMessage name={name} component={"p"} />
    </>
  );
}

export default Textarea;
