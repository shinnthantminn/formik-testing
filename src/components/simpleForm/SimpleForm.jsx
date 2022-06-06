import style from "./SimpleForm.module.css";
import { useFormik } from "formik";

function SimpleForm() {
  const initialValues = {
    name: "Shinn Thant Minn", //default value => Default ဆိုပေမဲ့ handleChange ပါရင်ပြင်လို့ရပါသေးတယ်
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("form Submit Data", values); //onSubmit အတွက်ပါပါတယ် submit အတွက် preventDefault ပါပါတယ်
  };

  const validate = (values) => {
    const error = {}; // ကြည့်လိုက်တာနဲ့ နားလည်နိုင်ပါတယ်

    if (!values.name) {
      error.name = "required";
    }

    if (!values.email) {
      error.email = "required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      error.email = "email format was not valid";
    }

    if (!values.channel) {
      error.channel = "required";
    }

    return error;
  };

  const formik = useFormik({
    initialValues,
    validate, // သူပါ ရင် onSubmit အလုပ်မလုပ်ဘူး
    onSubmit,
  }); //useFull method တွေရဖို့ အတွင် Object ကို Permeter အနနဲ့ ပေးလိုက်ရပါတယ်

  // for state management
  // console.log("form value handling", formik.values);
  //error
  // console.log("form Error validation", formik.errors);
  //for blur visited field
  console.log("visited field", formik.touched); // visited ဖြစ်ပြီးသွားတဲ့ field တွေကို true အနေနဲ့ Object ပြန်ပေးမှာပါ

  return (
    <div className={style.mainForm}>
      {/*  handleSubmit ကတော့ form Submit ကို handle လုပ်တာပါ */}
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange} //name attribute နဲ့ initialValue က တန်ဖိုနဲ့တူအောင်ထားပေးရပါမယ်
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <p>{formik.errors.name}</p>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.email}
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
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.channel}
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
