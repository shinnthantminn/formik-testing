import { Field, ErrorMessage } from "formik";

function Select({ name, label, opt, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        as={"select"}
        name={name}
        style={{ width: "100%", height: "40px" }}
        id={name}
        {...rest}
      >
        {opt.map((i, inx) => (
          <option value={i.key} key={inx}>
            {i.value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={"p"} />
    </>
  );
}

export default Select;
