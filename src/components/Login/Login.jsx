import { Formik, Form } from "formik";
import * as yup from "yup";
import FormControl from "../FormikContainer/FormControl";
import style from "../simpleForm/SimpleForm.module.css";

function Login({}) {
  const initialValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().required("Required").email("is no valid email format"),
    password: yup.string().required("Required"),
  });
  const onSubmit = (value, action) => {
    console.log(value);
    action.resetForm();
  };
  return (
    <Formik
      className={style.mainForm}
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className={style.form}>
          <FormControl
            type={"text"}
            control={"chakraInput"}
            name={"email"}
            label="email"
          />
          <FormControl
            type={"password"}
            control={"chakraInput"}
            name={"password"}
            label={"password"}
          />
          <button type={"submit"} disabled={!formik.isValid}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
