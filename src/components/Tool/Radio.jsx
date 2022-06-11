import { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

function Radio({ name, label, option, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field, form, meta }) => {
          return option.map((i) => {
            return (
              <Fragment key={i.key}>
                <input
                  type="radio"
                  id={i.value}
                  {...field}
                  value={i.value}
                  checked={field.value === i.value}
                  style={{
                    display: "inline",
                    width: "fit-content",
                    height: "fit-content",
                  }}
                />
                <label style={{ display: "inline" }} htmlFor={i.value}>
                  {i.key}
                </label>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={"p"} />
    </>
  );
}

export default Radio;
