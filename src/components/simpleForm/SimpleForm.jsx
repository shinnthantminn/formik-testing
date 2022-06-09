import style from "./SimpleForm.module.css";
import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as yup from "yup";
import ErrorText from "./ErrorText";

function SimpleForm() {
  const [data, setData] = useState(null);
  const initialValues = {
    name: "Shinn Thant Minn", //default value => Default ဆိုပေမဲ့ handleChange ပါရင်ပြင်လို့ရပါသေးတယ်
    email: "",
    channel: "",
    comment: "",
    address: "",
    //value တွေကို group အလိုက်ထားလို့ရပါတယ်
    social: {
      facebook: "",
      twitter: "",
    },
    //Array Value
    phone: ["", ""],
    Gf: [""],
  };

  const loadData = {
    name: "Htet Kyawt Linn", //default value => Default ဆိုပေမဲ့ handleChange ပါရင်ပြင်လို့ရပါသေးတယ်
    email: "Htethtet32@gmail.com",
    channel: "စောင်ရူမ",
    comment: "ဘောပဲရမယ်",
    address: "လားလားလီးလီး",
    //value တွေကို group အလိုက်ထားလို့ရပါတယ်
    social: {
      facebook: "",
      twitter: "",
    },
    //Array Value
    phone: ["", ""],
    Gf: [""],
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

  const onSubmit = (values, action) => {
    // အောက်ကကောင်ကို ပြန်ပြီး False လုပ်ပေးတာပါ ဒါမှပြန်ပြီး Submit က enable ပြန်ဖြစ်မှာပါ
    action.setSubmitting(false);
    console.log("form Submit Data", values); //onSubmit အတွက်ပါပါတယ် submit အတွက် preventDefault ပါပါတယ်
    action.resetForm(); //reset Form လုပ်လို့ရပါတယ်
  };

  //fieldLevel Validation ကတော့ တစ်ခု ထည်းအတွက်လုပ်ပေးတာပါ Condition ပေါ်မှူတီပြီသုံးရပါတယ်
  const validateComment = (value) => {
    let error;
    if (!value) {
      error = "required";
    }
    return error;
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={data || initialValues}
      enableReinitialize // API Data တွေပဲဖြစ်ဖြစ်ပြဖို့ အတွက် initialValues ကို အချိန်အပြောင်းလုပ်ဖို့ပါ
      className={style.mainForm}
      // validateOnMount //သူကတော့ Dom Render ချ တာ နဲ့ valid စစ်တာမို့ Submit Disable နဲ့ တွဲ သုံးကြပါတယ်
      //ဒီနှစ်ခု လုံးပါရင် OnSubmit မှ သာ Error ကို စစ်ပေးတော့ မှာပါ
      // validateOnChange={false}
      //onChange လုပ်ရင်လည်း တစ်ခြားနှစ်ခုကို Error ပြပေးမှာ မဟုတ်တော့ ပါဘူး
      // validateOnBlur={false}
      // onBlur ဖြစ်သွားလည်း Error ပြပေးမှာ မဟုတ်တော့ ပါဘူး
    >
      {/*Render Props ကို သုံးပြီးတော့ Formik ကို UseFormik လိုမျိုး Manual သုံးလို့ရပါတယ်*/}
      {(formik) => {
        console.log(formik);
        return (
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
            <Field as="textarea" name="comment" validate={validateComment} />
            <ErrorMessage name={"comment"} component="p" />

            <label htmlFor="address">Address</label>

            {/*Render Props pattern နဲ့ ရေးတာပါ အရမ်းမိုက်ပါတယ်*/}
            {/*FastField ကတော့ Performance optimization အတွက် သုံးကြပါတယ် */}
            <FastField name="address">
              {({ field, form, meta }) => {
                // console.log("i am render");
                return (
                  <div>
                    <input type="text" id="address" {...field} />
                    {meta.error && meta.touched ? <p>{meta.error}</p> : null}
                  </div>
                );
              }}
            </FastField>

            <label htmlFor="facebook">Facebook</label>
            {/*name နေရာမှာ Dot notation နဲ့ ရေးပေးလိုက်ယုံပါပဲ*/}
            <Field type={"text"} id={"facebook"} name={"social.facebook"} />

            <label htmlFor="twitter">twitter</label>
            <Field type={"text"} id={"twitter"} name={"social.twitter"} />

            {/*Array Value တွေကို index number နဲ့ထည့်လို့ရပါတယ်*/}
            <label htmlFor="phoneOne">phoneOne</label>
            <Field type="number" id={"phoneOne"} name={"phone[0]"} />

            <label htmlFor="phoneTwo">phoneTwo</label>
            <Field type="number" id={"phoneTwo"} name={"phone[1]"} />

            <label htmlFor="GF">GirlFriend List</label>
            {/*Dynamic Array လုပ်တာပါတော် အသုံးဝင်ပါတယ်*/}
            <FieldArray name={"Gf"}>
              {({
                push,
                remove,
                form: {
                  values: { Gf },
                },
                form,
              }) => {
                return Gf.map((i, inx) => (
                  <div key={inx}>
                    <Field name={`Gf[${inx}]`} />
                    {inx > 0 && (
                      <button type={"button"} onClick={() => remove(inx)}>
                        -
                      </button>
                    )}
                    <button type={"button"} onClick={() => push("")}>
                      +
                    </button>
                  </div>
                ));
              }}
            </FieldArray>

            {/*<button*/}
            {/*  type={"button"}*/}
            {/*  onClick={() => formik.validateField("comment")}*/}
            {/*>*/}
            {/*  Comment*/}
            {/*</button>*/}
            {/*<button type="button" onClick={() => formik.validateForm()}>*/}
            {/*  All*/}
            {/*</button>*/}

            {/*<button*/}
            {/*  type="button"*/}
            {/*  onClick={() => formik.setFieldTouched("comment")}*/}
            {/*>*/}
            {/*  touch Comment*/}
            {/*</button>*/}
            {/*<button*/}
            {/*  type="button"*/}
            {/*  onClick={() =>*/}
            {/*    formik.setTouched({*/}
            {/*      name: true,*/}
            {/*      email: true,*/}
            {/*      channel: true,*/}
            {/*    })*/}
            {/*  }*/}
            {/*>*/}
            {/*  All Touch*/}
            {/*</button>*/}

            {/*<button type="submit" disabled={!(formik.dirty && formik.isValid)}>*/}
            {/*  /!*isValid Method ကို သုံးပြီးတော့ Submit ကို Disable လုပ်ထားလို့ရပါတယ်*!/*/}
            {/*  /!*dirty ကတော့ Initial value မှာထည့်ထားတဲ့ State တွေကို ပြန်ပြင်ရင် true လို့ပြန်ပေးပါတယ်*!/*/}
            {/*  /!*ဒီနှစ်ခု ကို ဒီလို သုံးတာကောင်းပါတယ် ဒါပေမဲ့ validateMount ကို recommend ပေးပါတယ်*!/*/}
            {/*  submit*/}
            {/*</button>*/}

            {/*server နဲ့ ဆက်သွယ်လုပ်ကိုင်တဲ့ အခါမှာ Submit ကို အကြိမ်ကြိမ်မနှိပ်မိအောင် လို ကာကွယ်လို့ရပါတယ်*/}
            <button type="submit" disabled={formik.isSubmitting}>
              Submit
            </button>

            {/*API ကလာတဲ့ Data တွေကြရင်သုံးလို့ရပါတယ် enableReinitialize တော့လိုပါတယ်*/}
            <button type="button" onClick={() => setData(loadData)}>
              Load Data
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SimpleForm;
