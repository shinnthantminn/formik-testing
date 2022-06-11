import { Field, ErrorMessage } from "formik";
import { Fragment } from "react";

function Checkbox({ name, label, option, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return option.map((i) => (
            <Fragment key={i.key}>
              <label htmlFor={i.value} style={{ display: "inline" }}>
                {i.key}
              </label>
              <input
                type="checkbox"
                checked={field.value.includes(i.value)}
                style={{
                  display: "inline",
                  width: "fit-content",
                  height: "fit-content",
                }}
                {...field}
                id={i.value}
                value={i.value}
              />
            </Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={"p"} />
    </>
  );
}

export default Checkbox;
