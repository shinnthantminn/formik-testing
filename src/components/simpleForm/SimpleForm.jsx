import style from "./SimpleForm.module.css";
import { Formik } from "formik";
import * as yup from "yup";

function SimpleForm() {
  const initialValues = {
    name: "Shinn Thant Minn", //default value => Default ဆိုပေမဲ့ handleChange ပါရင်ပြင်လို့ရပါသေးတယ်
    email: "",
    channel: "",
  };

  const validationSchema = yup.object({
    //joi သုံးသလိုပဲသုံးတာပါ
    name: yup.string().required("Required"),
    email: yup
      .string()
      .email("this email was invalid email")
      .required("Required!"),
    channel: yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("form Submit Data", values); //onSubmit အတွက်ပါပါတယ် submit အတွက် preventDefault ပါပါတယ်
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      className={style.mainForm}
    >
      {({ handleSubmit, getFieldProps, errors, touched }) => (
        <form className={style.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            {...getFieldProps("name")}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            {...getFieldProps("email")}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}

          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            autoComplete="off"
            {...getFieldProps("channel")}
          />
          {errors.channel && touched.channel ? <p>{errors.channel}</p> : null}

          <button type="submit">submit</button>
        </form>
      )}
    </Formik>
  );
}

export default SimpleForm;
