import * as yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../FormikContainer/FormControl";
import style from "../simpleForm/SimpleForm.module.css";

function Register({}) {
  const option = [
    { key: "email", value: "emailmoc" },
    { key: "phone", value: "phonemoc" },
  ];
  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  // အရေးပါပါတယ်
  const validateSchema = yup.object({
    email: yup.string().email("email is no valid format").required("Required"),
    password: yup
      .string()
      .min(4, "password should be more than 4 count")
      .required("required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "password must match")
      .required("Required"),
    modeOfContact: yup.string().required("required"),
    phone: yup.string().when("modeOfContact", {
      is: "phonemoc",
      then: yup.string().required("Required"),
    }),
  });
  const onSubmit = (value) => console.log(value);
  return (
    <Formik
      className={style.mainForm}
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validateSchema}
    >
      {(formik) => (
        <Form className={style.form}>
          <FormControl
            control={"text"}
            type={"email"}
            name={"email"}
            label={"email Address"}
          />
          <FormControl
            control={"text"}
            type={"password"}
            name={"password"}
            label={"Password"}
          />
          <FormControl
            control={"text"}
            type={"password"}
            name={"confirmPassword"}
            label={"Confirm Password"}
          />
          <FormControl
            control={"radio"}
            name={"modeOfContact"}
            label={"Mode Of Contact"}
            option={option}
          />
          <FormControl
            control={"text"}
            type={"text"}
            name={"phone"}
            label={"Phone"}
          />
          <button type={"submit"}>Sign Up</button>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
