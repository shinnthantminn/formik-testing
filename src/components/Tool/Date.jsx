import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Date({ name, label, ...rest }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form: { setFieldValue }, form }) => {
          return (
            <DatePicker
              id={name}
              {...rest}
              {...field}
              selected={field.value}
              onChange={(e) => setFieldValue(name, e)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={"p"} />
    </>
  );
}

export default Date;
