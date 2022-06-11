import * as yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../FormikContainer/FormControl";
import style from "../simpleForm/SimpleForm.module.css";

function Course() {
  const dropDown = [
    { key: "", value: "Select" },
    { key: "Angular", value: "angular" },
    { key: "React", value: "react" },
    { key: "Vue", value: "vue" },
  ];
  const option = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "JS" },
  ];
  const initialValue = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validateSchema = yup.object({
    email: yup.string().required("Required"),
    bio: yup.string().required("Required"),
    course: yup.string().required("Required"),
    skills: yup.array().min(1, "required").required("Required"),
    courseDate: yup.date().required("Required").nullable(),
  });

  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
      className={style.mainForm}
    >
      <Form className={style.form}>
        <FormControl
          control={"text"}
          type={"email"}
          name={"email"}
          label="Email Address"
        />
        <FormControl
          control={"text"}
          type={"text"}
          name={"bio"}
          label={"Bio"}
        />
        <FormControl
          control={"select"}
          opt={dropDown}
          name={"course"}
          label={"Course"}
        />
        <FormControl
          control={"checkbox"}
          name={"skills"}
          option={option}
          label={"Skills"}
        />
        <FormControl
          control={"date"}
          name={"courseDate"}
          label={"Course Date"}
        />
        <button type={"submit"}>Submit</button>
      </Form>
    </Formik>
  );
}

export default Course;
