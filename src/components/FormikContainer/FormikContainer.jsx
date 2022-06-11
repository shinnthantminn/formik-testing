import { Formik, Form } from "formik";
import * as yup from "yup";
import style from "./FormContainer.module.css";
import FormControl from "./FormControl";

function FormikContainer() {
  const opt = [
    { key: "", value: "select" },
    { key: "mm", value: "myanmar" },
    { key: "kr", value: "korean" },
    { key: "usa", value: "united State" },
  ];

  const radio = [
    { key: "option1", value: "rOption1" },
    { key: "option2", value: "rOption2" },
    { key: "option3", value: "rOption3" },
  ];

  const check = [
    { key: "check1", value: "rCheck1" },
    { key: "check2", value: "rCheck2" },
    { key: "check3", value: "rCheck3" },
  ];

  const initialValue = {
    email: "",
    description: "",
    country: "",
    radioSelect: "",
    checkbox: [],
    dateOfBirth: null,
  };
  const validateSchema = yup.object({
    email: yup.string().email("that was no valid email").required("Required"),
    description: yup.string().required("required"),
    country: yup.string().required("required"),
    radioSelect: yup.string().required("required"),
    checkbox: yup.array().min(1, "required").required("required"),
    dateOfBirth: yup.date().required("required").nullable(), //nullable null ကို initialValue ထားလို့ရအောင်ပါ
  });
  const onSubmit = (value) => console.log(value);
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
        className={style.mainForm}
      >
        {(formik) => (
          <Form className={style.form}>
            <FormControl
              control="text"
              name="email"
              label={"email"}
              type={"email"}
            />
            <FormControl
              control={"textarea"}
              name={"description"}
              label={"description"}
            />
            <FormControl
              control={"select"}
              name={"country"}
              label={"Select Country"}
              opt={opt}
            />
            <FormControl
              control={"radio"}
              name={"radioSelect"}
              label={"Select"}
              option={radio}
            />

            <FormControl
              control={"checkbox"}
              name={"checkbox"}
              label={"check your section"}
              option={check}
            />
            <FormControl
              control={"date"}
              name={"dateOfBirth"}
              label={"Data of Birth"}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
