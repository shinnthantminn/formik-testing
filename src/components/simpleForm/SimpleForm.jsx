import style from "./SimpleForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import ErrorText from "./ErrorText";

function SimpleForm() {
  const initialValues = {
    name: "Shinn Thant Minn", //default value => Default ဆိုပေမဲ့ handleChange ပါရင်ပြင်လို့ရပါသေးတယ်
    email: "",
    channel: "",
    comment: "",
    address: "",
  };

  const validationSchema = yup.object({
    //joi သုံးသလိုပဲသုံးတာပါ
    name: yup.string().required("Required"),
    email: yup
      .string()
      .email("this email was invalid email")
      .required("Required!"),
    channel: yup.string().required("Required"),
    address: yup.string().required("Required"),
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
      <Form className={style.form}>
        {/*Form Component က onSubmit ပါပြီးသား*/}
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" autoComplete="off" />
        {/*Error ကို တစ်ခါထည်း ဖမ်းပေးပါတယ်*/}
        <ErrorMessage name="name" component="p" className="text-red-500" />

        <label htmlFor="email">Email</label>
        {/*  Field သုံးလိုက်တာနဲ့ ကျန်တဲ့ Data Cache တွေလုပ်စရာမလို့တော့ပါဘူး */}
        <Field type="email" name="email" id="email" autoComplete="off" />
        <ErrorMessage name="email" component={ErrorText} />
        {/*Custom Hook နဲ့ Error message ပြပေးတာပါ*/}

        <label htmlFor="channel">Channel</label>
        <Field type="text" name="channel" id="channel" autoComplete="off" />
        <ErrorMessage name="channel">{(msg) => <p>{msg}</p>}</ErrorMessage>
        {/* ဒါလည်းရပါတယ် */}

        {/*textarea လိုမျိုး Components တွေလိုခြင်ရင် Field ရဲ့ As ဒါမှမဟုတ် Component တို့ကို သုံနိုင်ပါတယ် as ကို တော့ ပိုပြီ Recommend ပေးပါတယ်*/}
        <label htmlFor="comment">Comment</label>
        <Field as="textarea" name="comment" />

        <label htmlFor="address">Address</label>

        {/*Render Props pattern နဲ့ ရေးတာပါ အရမ်းမိုက်ပါတယ်*/}
        <Field name="address">
          {({ field, form, meta }) => {
            return (
              <div>
                <input type="text" id="address" {...field} />
                {meta.error && meta.touched ? <p>{meta.error}</p> : null}
              </div>
            );
          }}
        </Field>

        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
}

export default SimpleForm;
