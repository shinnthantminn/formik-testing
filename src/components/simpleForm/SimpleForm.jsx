import style from "./SimpleForm.module.css";
import { useFormik } from "formik";
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={style.mainForm}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name && formik.touched.name ? (
          <p>{formik.errors.name}</p>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <p>{formik.errors.email}</p>
        ) : null}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          autoComplete="off"
          {...formik.getFieldProps("channel")}
        />
        {formik.errors.channel && formik.touched.channel ? (
          <p>{formik.errors.channel}</p>
        ) : null}

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
